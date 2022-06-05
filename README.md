# Getting Started with Events - single page react app
## Single page React app which displays multiple cards of events 
    In this application I am using React functional components and React hooks to perform operation on the data which is getting from API.
## Usage
1. _This application is use to get the details of an upcoming events. User can get the required information like event venue, event name, is it free/paid and online/offline_
2. _User can search an event in search box and get the details of the same._
## Features
### React Hooks:
1. Reacts hooks used in this task are mentioned below:
    * **useState**:
        1. It is used to track the state in function components.
        2. To get the searched value and past events from user.
    * **useEffect**:
        1. It is used to fetch the data from API. Once the DOM gets updated, It will fetch the required data and reflect it in browser.
        2. I have passed some dependencies to get the updated data. And it will render once the provided dependencies are changed.
        3. Dependecies: `[eventLimit, eventStatus, eventSearch, eventCount]`

### Axios
* Axios is a Javascript library that serves to make HTTP request.
* Using Axios we will get the data from the API Asynchronously.
    *  Install Axios in React App:

            npm install axios
## Load More Events
* By clicking on Load more CTA user can able to see more events.
## Responsive for mobile, tablet and wide screen
* Application is responsive for all the devices.
* I have used media quries in CSS to make the application responsive. 

## Structure of the application
* I have divided all sections into components.
* Events componet contains the functional part of the events.
* Similarly for header, search , button and eventCards I have created separate components.
 
