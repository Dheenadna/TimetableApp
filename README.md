# GMIT Timetable App

This is an Timetable application designed and built for the students and staff members for GMIT Galway. Upon registering and logging into the app, the main page displays an option to select any course in GMIT. We designed this application to provide easier access for students and staff to view their timetables while providing them push notifications to alert users before their next class and to alert them of what class they have and where it is being held.

## App Design
We decided to use Ionic for the frontend of the application because it is a cross-platform framework that allows you to develop apps for a myriad of different platforms such as Android, iOS and Windows. 

This allowed us to spend more of our time developing in one language and also gave us the advantage of being able to deploy our app on many different platforms. 

Ionic also runs on Typescript, HTML and CSS, this allowed us to develop an application that meets industry standard UI specifications because these languages have the ability to create consistent and easy to use UI’s for the everyday user.

### App Mock-up
<img src="https://user-images.githubusercontent.com/13294094/39385747-9d1a866a-4a69-11e8-895b-a9b71e705bb7.png"/>


## Server Design
For this project we decided to follow the MEAN stack layout for designing a full-scale application, if you would like to read further about the MEAN stack layout you can do so [here](http://mean.io/). 

The server setup and design decisions can be broken down into the following steps:
1. Python script that scrapes all the course timetables from GMIT timetable website and populates timetables into a Mongo database.
   
   * When designing the python script, we went to the timetable.gmit.ie website and looked at how the website pulls the information from      the database of timetables. The website uses a ASP.NET form for sending requests to a server and loads a new page with the              information retrieved from the server. 
   
   * When writing the script, we ran into a problem, the timetable website uses sessions to validate that you are a user, to get around        this problem we had to get our web scraper to visit the first page http://timetable.gmit.ie and go to the next subsequent pages by        submitting ASP.NET forms with the proper VIEW_STATE's and EVENT_STATE id's.
   
   * After getting to the programmes page on the timetable website you will come across a form where you can choose from a dropdown          menu what course you want to get the timetable for. We designed our web scraper to loop over each item in the dropdown and pass the      courseId into the ASP.NET form and retrieve the timetable for each course.
   
   * When the scraper visits a timetable page it loops over the DOM and selects the appropriate information and populates it into a          Mongo database

2. Node.js application running on express that handles the various API routes that the application uses.

   * The Node server was built on the Epxress.js framework, a framework that allows you to easily create various routes and endpoints on a node application, the Express framework builds upon Nodes native HTTP library and takes out a lot of the bulk that would normally be involved with designing a REST API. 

   * We used Mongoose to define MongoDB Models and Schema Types and used Mongoose’s built in querying structure to make complex query’s to the database. 

   * Passports.js was used as a authentication middleware for our application, we used it in combination with the JWTPassport.js library to allow us to authenticate users logging into the server. Another library that we used was the bcyrpt.js library, we used this library for hashing passwords for users before the document is stored in the Mongo database.

3. MongoDB
   * We designed the database in MongoDB because of its NoSQL format and document based structure in relation to MySQL tables and rows data model. 


   * The main reason we used MongoDB is because of its easy integration with web applications such as Node and other web frameworks like Angular and Ionic, this is because Mongo’s document structure follows a JSON format. Since Mongo’s document are in JSON format this makes it very easy to build web applications using Mongo as a database solution. Since all modern web frameworks are built on JavaScript this means that its extremely easy to use Mongo in Web based applications. 

### API endpoints
| HTTP method   | URL path |
| :--| :---------------|
| GET | /api/courses/         |
| POST | /api/courses/         |
| POST | /api/courses/updateModule      |
| POST | /api/courses/createModule        |
| POST | /api/courses/deleteModule       |
| POST | /api/auth/register       |
| POST | /api/auth/login        |
| POST | /api/auth/updateUser   |
| GET | /api/auth/protected   |



### Sample document from courses collection

```json
{
	"_id" : "#SPLUSB1643B",
   "courseName" : "G-KSOAG83 BSc (Hons) in Computing in Software Development L8 Yr 3 Sem 6",
	"Monday" : [
		{
			"lecturer" : "Deirdre O'Donovan",
			"moduleName" : "KSOFG73/KBDIG73 Database Mgmt Sys/L",
			"room" : "0994",
			"startTime" : "10:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd70"),
			"weeks" : "22-31, 34-36",
			"endTime" : "11:00"
		},
		{
			"_id" : ObjectId("5ae076505148f67adb2fcd71"),
			"moduleName" : "KSOFG73 MOBILE APPS DEVELOPMENT/L",
			"lecturer" : "Damien Costello",
			"room" : "0995",
			"startTime" : "12:00",
			"endTime" : "14:00",
			"moduleType" : "L",
			"duration" : "2:00"
		},
		{
			"lecturer" : "Ian Mc Loughlin",
			"moduleName" : "KSOFG73 GRAPH THEORY Gr A/P",
			"room" : "0470 Computing Practical Lab (BOYD)",
			"startTime" : "15:00",
			"duration" : "1:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd72"),
			"weeks" : "22-31, 34-36",
			"endTime" : "16:00"
		},
		{
			"lecturer" : "Gerard Harrison",
			"moduleName" : "KSOFG73 SERVER SIDE RAD Gr C/P",
			"room" : "0436 CR5",
			"startTime" : "16:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd73"),
			"weeks" : "22-31, 34-36",
			"endTime" : "18:00"
		},
		{
			"lecturer" : "Martin Hynes",
			"moduleName" : "KSOFG73/ESOEG36 Software Testing Gr A/P",
			"room" : "0479 CR8",
			"startTime" : "16:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd74"),
			"weeks" : "22-30, 34-36",
			"endTime" : "18:00"
		}
	],
	"Tuesday" : [
		{
			"lecturer" : "Deirdre O'Donovan",
			"moduleName" : "KSOFG73 Database Mgmt Systems Gr A/P",
			"room" : "0481 CR4",
			"startTime" : "9:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd75"),
			"weeks" : "22-31, 34-36",
			"endTime" : "11:00"
		},
		{
			"lecturer" : "Martin Hynes",
			"moduleName" : "KSOFG73 Software Testing Gr C/P",
			"room" : "0436 CR5",
			"startTime" : "9:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd76"),
			"weeks" : "22-31, 34-36",
			"endTime" : "11:00"
		},
		{
			"lecturer" : "Damien Costello",
			"moduleName" : "KSOFG73 MOBILE APPS DEVELOPMENT Gr A/P",
			"room" : "0470 Computing Practical Lab (BOYD)",
			"startTime" : "11:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd77"),
			"weeks" : "22-31, 34-36",
			"endTime" : "13:00"
		},
		{
			"lecturer" : "Ian Mc Loughlin",
			"moduleName" : "KSOFG73 GRAPH THEORY Gr B/P",
			"room" : "0379",
			"startTime" : "12:00",
			"duration" : "1:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd78"),
			"weeks" : "22, 24-31, 34-36",
			"endTime" : "13:00"
		},
		{
			"lecturer" : "Martin Hynes",
			"moduleName" : "KSOFG73 Software Testing Gr B/P",
			"room" : "0436 CR5",
			"startTime" : "14:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd79"),
			"weeks" : "22-31, 34-36",
			"endTime" : "16:00"
		},
		{
			"lecturer" : "Ian Mc Loughlin",
			"moduleName" : "KSOFG73 GRAPH THEORY Gr C/P",
			"room" : "0470 Computing Practical Lab (BOYD)",
			"startTime" : "15:00",
			"duration" : "1:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd7a"),
			"weeks" : "22-31, 34-36",
			"endTime" : "16:00"
		},
		{
			"lecturer" : "Gerard Harrison",
			"moduleName" : "KSOFG73 SERVER SIDE RAD Gr B/P",
			"room" : "0436 CR5",
			"startTime" : "16:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd7b"),
			"weeks" : "22-31, 34-36",
			"endTime" : "18:00"
		}
	],
	"Wednesday" : [
		{
			"lecturer" : "Gerard Harrison",
			"moduleName" : "KSOFG73 SERVER SIDE RAD/L",
			"room" : "0208",
			"startTime" : "9:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd7c"),
			"weeks" : "22-31, 34-36",
			"endTime" : "10:00"
		},
		{
			"lecturer" : "Ian Mc Loughlin",
			"moduleName" : "KSOFG73 GRAPH THEORY/L",
			"room" : "0996",
			"startTime" : "10:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd7d"),
			"weeks" : "22-31, 34-36",
			"endTime" : "11:00"
		},
		{
			"lecturer" : "Damien Costello",
			"moduleName" : "KSOFG73 PROFESSIONAL PRACTICE IN IT/L",
			"room" : "0995",
			"startTime" : "11:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd7e"),
			"weeks" : "22-31, 34-36",
			"endTime" : "12:00"
		},
		{
			"lecturer" : "Deirdre O'Donovan",
			"moduleName" : "KSOFG73 Database Mgmt Sys Assessment",
			"room" : "0903",
			"startTime" : "12:00",
			"duration" : "1:00",
			"moduleType" : "A",
			"_id" : ObjectId("5ae076505148f67adb2fcd7f"),
			"weeks" : "35-36",
			"endTime" : "13:00"
		},
		{
			"lecturer" : "Naomi Regan-Hurley",
			"moduleName" : "KSOFG73/KCDMG84/ESOEG36 Software Testing",
			"room" : "0837",
			"startTime" : "14:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd80"),
			"weeks" : "22-31, 34-36",
			"endTime" : "15:00"
		},
		{
			"lecturer" : "Martin Hynes",
			"moduleName" : "KSOFG73/KCDMG84/ESOEG36 Software Testing/lL",
			"room" : "0939",
			"startTime" : "15:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd81"),
			"weeks" : "22-31, 34-36",
			"endTime" : "16:00"
		}
	],
	"Thursday" : [
		{
			"lecturer" : "Damien Costello",
			"moduleName" : "KSOFG73 MOBILE APPS DEVELOPMENT Gr C/P",
			"room" : "0479 CR8",
			"startTime" : "9:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd82"),
			"weeks" : "22-31, 34-36",
			"endTime" : "11:00"
		},
		{
			"lecturer" : "Damien Costello",
			"moduleName" : "KSOFG73 MOBILE APPS DEVELOPMENT Gr B/P",
			"room" : "0479 CR8",
			"startTime" : "11:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd83"),
			"weeks" : "22-31, 34-36",
			"endTime" : "13:00"
		},
		{
			"lecturer" : "Deirdre O'Donovan",
			"moduleName" : "KSOFG73/KBDIG73 Database Mgmt Sys/L",
			"room" : "0939",
			"startTime" : "13:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd84"),
			"weeks" : "22-31, 34-36",
			"endTime" : "14:00"
		},
		{
			"lecturer" : "Gerard Harrison",
			"moduleName" : "KSOFG73 SERVER SIDE RAD Gr A/P",
			"room" : "0436 CR5",
			"startTime" : "14:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd85"),
			"weeks" : "22-31, 34-36",
			"endTime" : "16:00"
		},
		{
			"lecturer" : "Deirdre O'Donovan",
			"moduleName" : "KSOFG73 Database Mgmt Systems Gr C/P",
			"room" : "0483 CR2",
			"startTime" : "14:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd86"),
			"weeks" : "22-31, 34-36",
			"endTime" : "16:00"
		}
	],
   	"Friday" : [
		{
			"lecturer" : "Deirdre O'Donovan",
			"moduleName" : "KSOFG73 Database Mgmt Systems Gr B/P",
			"room" : "0482 CR3",
			"startTime" : "9:00",
			"duration" : "2:00",
			"moduleType" : "P",
			"_id" : ObjectId("5ae076505148f67adb2fcd87"),
			"weeks" : "22-31, 34-36",
			"endTime" : "11:00"
		},
		{
			"lecturer" : "Ian Mc Loughlin",
			"moduleName" : "KSOFG73 GRAPH THEORY/L",
			"room" : "0996",
			"startTime" : "11:00",
			"duration" : "1:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd88"),
			"weeks" : "22-31, 34-36",
			"endTime" : "12:00"
		},
		{
			"lecturer" : "Martin Hynes",
			"moduleName" : "Software Testing CA",
			"room" : "0436 CR5,0483 CR2,0484 CR1",
			"startTime" : "14:00",
			"duration" : "2:00",
			"moduleType" : "L",
			"_id" : ObjectId("5ae076505148f67adb2fcd89"),
			"weeks" : "36",
			"endTime" : "16:00"
		}
	]
}
```



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
   * [Express.js](https://expressjs.com/) - REST API structure
   * [Mongoose.js](http://mongoosejs.com/) - Models MongoDb schemas for Node
   * [Passport.js](http://www.passportjs.org/) - Server authentication.

* [Python](https://www.python.org/) - Python script used to scrape timetables
   * [BeutifulSoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - Python library used for manipulating the DOM
   * [Mechanize](https://github.com/python-mechanize/mechanize) - Python library used for submitting forms


## Authors

* **Donal Burke** - [lanodburke](https://github.com/lanodburke)
* **Naqi Ahmad** - [nakster](https://github.com/nakster)
* **Sean McGuire** - [smcguire56](https://github.com/smcguire56)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


