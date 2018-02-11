# NC-NEWS-Back-Front-End

This is a final project of the Northcoders curriculum, to showcase our abilities. These skills will show my ability to have sufficient skills in both the front end and backend.

[Deployed](https://nc-news-test-2.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

First make a new directory and clone the repo to there. 

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
Note: These tests are located in the src folder and have a naming convetion "example.test.js".

### Article tests

Article tests for, the features below. 

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
Expect articles to have the values, author, body, category, imageUrl, and title to be a string, but votes to be a number.
```


```
Updates vote count in comment for an upvote.
```

```
Updates vote count in comment for a downvote.
```

Note: To view all tests, please navigate to the spec folder and see the tests.

## Built With

* [React](https://reactjs.org) - FrontEnd
* [BackEnd](https://expressjs.com) - Express
* [Database](https://firebase.google.com) - Firebase
* [Deployment](https://dashboard.heroku.com/login) - Heroku

## Authors

* **Haseeb Akbar**

## Acknowledgments

* Thanks to Northcoders for the support.