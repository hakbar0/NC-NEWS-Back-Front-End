# NC-NEWS-Back-Front-End

This is my final project for the Northcoders curriculum, demonstrating my abilities in front and back end technologies. I originally completed this project using MongoDB, Mongoose, Express and React, and have chosen to re-do the project from stratch using the Firebase Cloud Platform which offers a realtime database, authentication and cloud computing solutions.

[Live App](https://nc-news-test-2.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed.

### Installing

Below will tell you how to get setup.

```
git clone https://github.com/hakbar0/NC-NEWS-Back-Front-End.git
cd NC-NEWS-Back-Front-End
npm install
```

Note: This could take some time, depending on your internet connection.

### Run locally

Note to run locally, navigate to the directory this repo is located at. Then run start. 

```
npm start
```

## Running the tests

To run tests navigate to the root folder and run npm t.

```
npm t
```
Note: These tests are located in the src folder and have a naming convention "example.test.js".

## Built With

* [React](https://reactjs.org) - FrontEnd
* [BackEnd](https://expressjs.com) - Express
* [Database](https://firebase.google.com) - Firebase
* [Deployment](https://dashboard.heroku.com/login) - Heroku

## Description

The purpose of this project was to design, build and test a news application. The features are listed below.

*   A get request on ‘/’ displays all articles.
*   A get request on ‘/article/:id’ display that single article.
*   A get request on ‘/topics’ displays all the topics.
*   A get request on ‘/topics/:topic’ display all articles for that topic.
*   A get request on ‘/create-story’ displays a form where you can create a story. 
*   A get request on ‘/users’ displays all users who have made an article.
*   A get request on ‘/users/:name’ displays all articles for that single users.
*   If any other route is requested a 404 error will be shown.

*   Can only delete comments posted under the author northcoder.

### Home page

Below are examples of how the homepage looks, you can see it scales nicely.

A desktop example.

![alt text](/Images/hdArticle.png)

A mobile example.

![alt text](/Images/mobileArticle.png)

### Future Work

* Authentication - Firebase makes authentication easy, so I would like to integrate an auth layer into my application.

* Limiting voting - currently a user can infinitely up or down-vote an article. I would like to redesign my database to keep track of how many times a user has voted on an article.

* Seeding - Seeding Firebase was a learning curve for me and I would like to improve my seeding process to make development workflow easier.

* Tech choices - in the future I would probably use MongoDB for my database rather than Firebase's realtime database, as I found it easier to work with more structured data that Firebase's Realtime Database provides. I would also be interested to explore Firebase's new Cloud Firestore database which stores documents in more organised collections.

* Testing React - am keen to learn more about React testing with Jest, the framework I used to test my database queries.

### Outcome

The application was useful and nicely presented. This worked well on both desktop and mobile. The major learning outcome for me was integrating the backend and frontend. As normally we would have designed both parts separately. By working on both, it allowed me to see the bigger picture. 

## Authors

* **Haseeb Akbar**

## Acknowledgments

* Thanks to Northcoders and Harriet for the support.
