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
    
    def scrape(self):
        self.goto_programmes_page()            

if __name__ == '__main__':
    scraper = ArchitectFinderScraper()
    scraper.scrape()