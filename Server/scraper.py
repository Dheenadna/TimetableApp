from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient()

import mechanize
import re
import urllib
import json
import pymongo

class ArchitectFinderScraper(object):
    def __init__(self):
        self.url = "http://timetable.gmit.ie"
        self.br = mechanize.Browser()
        self.br.addheaders = [('User-agent', 
                               'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.63 Safari/535.7')]

    def goto_programmes_page(self):
        self.br.open(self.url)
        s = BeautifulSoup(self.br.response().read())

        for link in s.findAll("a", text="Academic Year 2017/18"):
            if 'href' in link.attrs: 
                self.url = link.attrs['href']

        self.goto_form_page()

    def goto_form_page(self):
        self.br.open(self.url)
        s = BeautifulSoup(self.br.response().read())

        saved_form = s.find('form', id='form1').prettify()

        view_state = s.find('input', id='__VIEWSTATE')
        view_state_generator = s.find('input', id='__VIEWSTATEGENERATOR')
        event_validation = s.find('input', id='__EVENTVALIDATION')

        self.br.select_form('form1')
        self.br.form.set_all_readonly(False)
        self.br.form['__EVENTTARGET'] = "LinkBtn_programmesofstudy"
        self.br.form['__VIEWSTATE'] = view_state['value']
        self.br.form['__VIEWSTATEGENERATOR'] = view_state_generator['value']
        self.br.form['__EVENTVALIDATION'] = event_validation['value']
        self.br.form['tLinkType'] = "information"
        self.br.form.fixup()

        self.br.submit()

        s = BeautifulSoup(self.br.response().read())
        self.br.select_form('form1')
        items = self.br.form.find_control('dlObject').get_items()

        for item in items:
            if len(item.name) < 1:
                continue

            print('Scraping timetable for course: \n([ %s ])' % item.name)
            self.scrape_course_timetables(item)
    
    
    def scrape_course_timetables(self, item):
        s = BeautifulSoup(self.br.response().read())
        saved_form = s.find('form', id='form1').prettify()

        view_state = s.find('input', id='__VIEWSTATE')
        view_state_generator = s.find('input', id='__VIEWSTATEGENERATOR')
        event_validation = s.find('input', id='__EVENTVALIDATION')
        list_view = s.find('option', text="List Timetable")

        self.br.select_form('form1')
        self.br.form.set_all_readonly(False)
        self.br.form['__VIEWSTATE'] = view_state['value']
        self.br.form['__VIEWSTATEGENERATOR'] = view_state_generator['value']
        self.br.form['__EVENTVALIDATION'] = event_validation['value']
        self.br.form['tLinkType'] = "programmesofstudy"
        self.br.form['dlObject'] = [ item.name ]
        self.br.form['dlType'] = ["TextSpreadsheet;swsurl;SWSCUST Object TextSpreadsheet", ]

        self.br.form.fixup()

        self.br.submit(name='bGetTimetable')

        resp = self.br.response().read()

        self.scrape_timetable(item)

        self.br.back()
    
    def scrape(self):
        self.goto_programmes_page()

    def scrape_timetable(self, item):
        db = client['timetables']

        soup = BeautifulSoup(self.br.response().read())

        list_modules = []

        days = soup.findAll('span', {'class': 'labelone'})

        for num, table in enumerate(soup.findAll('table', {'class', 'spreadsheet'})):
            day = days[num].get_text()
            for tr in table.findAll('tr')[1:]:
                cells = tr.findAll('td')
                index = 0
                for i in range(len(cells)):
                    if i == 0:
                        moduleName = cells[i].get_text()
                    if i == 1:
                        moduleType = cells[i].get_text()
                    if i == 2:
                        startTime = cells[i].get_text()
                    if i == 3:
                        endTime = cells[i].get_text()
                    if i == 4:
                        duration = cells[i].get_text()
                    if i == 5:
                        weeks = cells[i].get_text()
                    if i == 6:
                        room = cells[i].get_text()
                    if i == 7:
                        lecturer = cells[i].get_text()
                    index = index + 1

                module = {
                    "day": day, 
                    "moduleName": moduleName,
                    "moduleType": moduleType,
                    "startTime": startTime,
                    "endTime": endTime,
                    "duration": duration,
                    "weeks": weeks,
                    "room": room,
                    "lecturer": lecturer
                }

                list_modules.append(module)

        timetables = list_modules

        jsonObj = {
            "_id": item.name,
            "courseName": item.attrs['label'],
            "timetable" : timetables
        }

        courses = db.courses

        result = courses.insert_one(jsonObj)

        print('One post: {0}'.format(result.inserted_id))
            

if __name__ == '__main__':
    scraper = ArchitectFinderScraper()
    scraper.scrape()