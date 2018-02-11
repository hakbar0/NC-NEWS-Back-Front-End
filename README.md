# NC-NEWS-Back-Front-End

This is a final project of the Northcoders curriculum, to showcase our abilities. These skills will show my ability to have sufficient skills in both the frontend and backend.

[Live App](https://nc-news-test-2.herokuapp.com/)

Please read description to see how it works.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

First make a new directory and clone the repo. 

```
mkdir nc-news
```

```
cd ./path/nc-news
```

```
git clone https://github.com/hakbar0/NC-NEWS-Back-Front-End.git
```

### Installing

Below will tell you how to get setup.

First install node modules.

```
npm install
```

Note: This could take some time, depending on your internet connection.

## Running the tests

To run tests navigate to the root folder and run npm t.

```
npm t
```
Note: These tests are located in the src folder and have a naming convention "example.test.js".

### Article tests

Article tests, for the features below. 

```
Able to retrieve all articles in an object format.
```

```
Expect articles to have the keys, author, body, category, imageUrl, title and votes.
```

```
Expect articles to have the keys of a length of 6.
```

```
Expect articles to have the values, author, body, category, imageUrl, and title to be a string, but votes to be a number.
```

```
Updates vote count in article for an upvote.
```

```
Updates vote count in article for a downvote.
```

Note: To view all tests, please navigate to the spec folder and see the tests.

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
*   If any route is given a 404 error will be shown.

*   Can only deleted comments posted under the author northcoder.

### Home page

Below are examples of how the homepage looks, you can see it scales nicely.

A desktop example.

![alt text](/Images/hdArticle.png)

A mobile example.

[alt text](/Images/mobileArticle.png)

The article page first checks if the states have any values. As the default value of the state is '' which is a falsely value. This mean the loading gif will keep displaying until, the state has a truthy value. We then make a request to Firebase to retrieve all the data for all articles. 

[alt text](/Images/articleBlock.png)  

You can see all stories are kept under a sort of key known as Stories which I defined. As shown in the image we get the articles back in a massive nested objected. So, to extract all articles, I need to convert this object to an array, and then map over this new array. I also use the array method, reverse to reverse the array to make sure the newest articles come first. As Firebase by default returns oldest first. 

Note: This should hopefully make it to easier understand how all the other pages work.

### Problems/Future Work

Routing/status codes: In terms of all routing, that was all achieved in react. My backend express only ran a command to run the build file. This naturally opened the react app.
This means setting error codes could not be done within the backend. 
The backend was also very minimal, as to get data from Firebase is very easy. All you need to do is call a function and this will return the data you desire. 

Routing(Future work): When setting up a new application, design the backend and frontend as two different modules, so can send back the right error codes.

Loading issues: When a user requests an article/topic that doesn't exist, the loading icon loops infinitely. Yes, a user should be able to tell something is wrong because the page is taking long to load. Also, a user shouldn't know a topic id or article id so there shouldn't really be a case where they should type a wrong id manually. 

Loading(Future work): Read up on how to send a response back from Firebase, if there is no data. To give more feedback to the user.

Voting issues: Able to vote infinitely.  

Voting(Future work): Able to have authentication, possibly with GitHub, so a user can only vote once. 

Form issues: Note forms feedback is minimal and is done within the html form itself. So, it will force you to at least atempt to fill the form in.

Form issues(Future work): Have a helpful form. Describing exactly what is wrong by giving the user live feedback.

### Outcome

The application was useful and nicely presented. This worked well on both desktop and mobile. The major learning outcome for me was integrating the backend and frontend. As normally we would have designed both parts separately or be it by working on separate teams. But by working on both it allowed me to see the bigger picture.

## Authors

* **Haseeb Akbar**

## Acknowledgments

* Thanks to Northcoders for the support.
