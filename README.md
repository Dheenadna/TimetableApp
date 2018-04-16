# GMIT Timetable App

This is an Timetable application designed and built for the students and staff members for GMIT Galway. Upon registering and logging into the app, the main page displays an option to select any course in GMIT. We designed this application to provide easier access for students and staff to view their timetables while providing them push notifications to alert users before their next class and to alert them of what class they have and where it is being held.

## App Design

## Server Design
For this project we decided to follow the MEAN stack layout for designing a full-scale application, if you would like to read further about the MEAN stack layout you can do so [here](http://mean.io/). 

The server setup and design decisions can be broken down into the following steps:
1. Python script that scrapes all the course timetables from GMIT timetable website and populates timetables into a Mongo database.
   
   * When designing the python script, we went to the timetable.gmit.ie website and looked at how the website pulls the information from      the database of timetables. The website uses a ASP.NET form for sending requests to a server and loads a new page with the              information retrieved from the server. 
   
   * When writing the script, we ran into a problem, the timetable website uses sessions to validate that you are a user, to get around        this problem we had to get our web scraper to visit the first page http://timetable.gmit.ie and go to the next subsequent pages by        submitting ASP.NET forms with the proper VIEW_STATE's and EVENT_STATE id's.
   
   * After getting to the programmes page on the timetable website you will come across a form where you can choose from a dropdown          menu what course you want to get the timetable for. We designed our web scraper to loop over each item in the dropdown and pass the      courseId into the ASP.NET form and retrieve the timetable for each course.
   
   * When the scraper visits a timetable page it loops over the DOM and selects the appropriate information and populates it into a          Mongo database

2. Node.js application running on express that handles the various API routes that the application uses.





## Getting Started

To run the program first you will need to clone this repository onto your local machine.
```
git clone https://github.com/lanodburke/TimetableApp.git
```
Change directory into the TimetableApp folder.
```
cd TimetableApp
```
You will need to install all the node_modeuls for this project by running this command
```
npm install 
```
After installing the project dependencies, run this command
```
ionic serve
```

## Prerequisites

To run this application on your local machine you will need to have Ionic installed, if you do not have it installed you can follow this run through on how to install ionic onto your local machine [here](https://ionicframework.com/docs/intro/installation/)

## Built With

* [Ionic](https://ionicframework.com/) - Mobile App framework used
* [Angular](https://angular.io/) - Ionic is built on angular
* [MongoDB](https://www.mongodb.com/) - Database framework used
* [Node.js](https://nodejs.org/en/) - Backend server API
* [Python](https://www.python.org/) - Python script used to scrape timetables
  * [BeutifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - Python library used for manipulating the DOM
  * [Mechanize](https://github.com/python-mechanize/mechanize) - Python library used for submitting forms


## Authors

* **Donal Burke** - [lanodburke](https://github.com/lanodburke)
* **Naqi Ahmad** - [nakster](https://github.com/nakster)
* **Sean McGuire** - [smcguire56](https://github.com/smcguire56)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


