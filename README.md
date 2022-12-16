<div align="center">

<h1> <b>Zodiac Healer - The Online Shop</b> </h1>

<h2> Feature extension by Veronica Baldin </h2>
<h2> Original MVP by Danielle Drake </h2>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#motivation">Motivation</a>
    </li>
    <li>
      <a href="#tools-used">Tools Used</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#database-schema">Database Schema</a></li>
    <li><a href="#api-routes">API Routes</a></li>
    <li><a href="#future-features">Future Features</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#original-readme">Original Readme</a></li>
  </ol>
</details>

</div>

## Tools Used
* VS Code
* Github
* Gitbash
* Postman
* MySQL
* HTML
* CSS
* JavaScript
* React.js
* Node.js
* Express
* React Router
* DrawSQL

## Getting started 

### Prerequisites
- npm
- node
- mySQL


### Installation

1. Create a .env file:

  ```
  DB_HOST = localhost
  DB_NAME = shop
  DB_USER = // your db username
  DB_PASS = // your db password
  TZ = UTC
  ```

2. To run the database, type 'mysql' into the terminal and run the following command:
 ```sh
  CREATE DATABASE shop;
  ```

3. Install NPM packages on both the server and on the client.
```
npm install
```

4. Make sure to populate your database with the correct info by typing this on the server side:
```
npm run migrate
```

5. To run the backend, type in the server side:
```
npm start
```

6. In a second terminal window, type 'cd client' to get into the front-end folder, then type:
```
npm start
```

 Frontend runs on http://localhost:3000, and backend runs on http://localhost:5000.


## Database Schema

<img width="917" alt="Screenshot 2022-12-16 at 20 39 09" src="https://user-images.githubusercontent.com/113427751/208175980-a87099d8-b00d-4006-85cf-9a7ecb7dbae5.png">

## API Routes
You can access a table describing all API routes [here](https://docs.google.com/document/d/1xjT_hLAWnwsRiD6oWZlV_ly9zYuJhKSVRmh5oMERUZs/edit?usp=sharing)

## Future features

* Log-in for user and admin
* Stripe for payments
* Order confirmation sent by email

## Contact

Veronica Baldin - [LinkedIn](https://www.linkedin.com/in/veronica-baldin/)

## Acknowledgments

* Instructor [Jim Rudolf](https://github.com/jbrcodes)
* TA [Lucie Baborová](https://github.com/lucieBBR)
* TA [Maria Llaverias Pugliese](https://github.com/mariallaverias)
* TA [Pia Prozesky](https://github.com/piaprozesky)


### Thank you for all your help!<br>


_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._

## Original Readme

### Summary

The Z.H is a web app that displays a user’s horoscope in a modern, minimalistic and easy to digest way. It includes daily affirmation generator, a question and answer oracle and an art gallery. This is an MVP project. 

### Motivation and Description

Over the last few years, interest in astrology has experienced something of a boom, thanks to the general feelings of uncertainty left over by the pandemic, young people’s growing obsession with new-age topics trending on tiktok and rise of investment companies backing astrology apps like Co-Star and Sanctuary.

But finding the simple, easy to read horoscopes has become a bit of a mission. Most sites overcomplicate the user journey, asking for dozens of data points and requiring users to share their emails and contact details before they can even see if this is the site for them.

MyDay helps you move past all the noise and get your daily horoscope in a couple of clicks and displays it in a modern, easy to read way. 

Check it on your way to work, on your coffee break or when there’s a commercial break during your favourite show.

Getting your daily horoscope shouldn’t take time out of your day.

***SIGNS***

|-------------|------------|------------|------------|
|    Aries    |   Taurus   |   Gemini   |   Cancer   |   
|-------------|------------|------------|------------|
|     Leo     |    Virgo   |    Libra   |   Scorpio  | 
|-------------|------------|------------|------------|
| Sagittarius |  Capricorn |  Aquarius  |   Pisces   |
|-------------|------------|------------|------------|



==============================================================

### Features

This web app has four screens.
-Home
-Affirmations
-Horoscope
-Art

#### Generate Daily Horoscope

> Parameters
 - Sign selector
 - Date selector (today/tomorrow)
 
> Generated Horoscope :
- Current Date: {{data.current_date}}
- Compatibility: {{data.compatibility}}   
- Lucky Number: {{data.lucky_number}}
- Lucky Time: {{data.lucky_time}}   
- Color: {{data.color}}
- Date Range: {{data.date_range}}   
- Mood: {{data.mood}}
- Description: {{data.description}}


#### Affirmations

> Parameters
- Mood
- Question (optional)

> Generated Affirmation :
- Affirmation: {affirmation.affirmation}
- Answer: {answer.answer}

#### Art Gallery

> Zodiac signs by English map maker, Sidney Hall (1825) - Royalty Free
- Image links point to Picture Blue Box where free versions of PDFs can be downloaded for personal use

=====================================================================================

## Installation


### Created using React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Built with

- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Dependencies - Installations

***Node.js***
The JavaScript runtime environment that allows you to run JavaScript on your computer. You can download it from [Node.js](https://nodejs.org/en/).

***React.JS***
`$npm install react`

***React Router***
`$npm install react-router-dom@6`

_Dependencies within the src/index.js file:_

```
Placed at the top of the file:
import { BrowserRouter } from "react-router-dom";

Ensure the app is wrapped in a <BrowserRouter>:

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
); 
```

=================================================================================================

### Dependencies - API

Aztro API - [Aztro](https://aztro.readthedocs.io/en/latest/)


#### URL 

`https://aztro.sameerkumar.website/?sign={sign}&day={day}`


#### Parameters

| Parameter |   Type   |      Description     |
|-----------|----------|----------------------|
|    sign   |  string  |      Zodiac sign     |
|    day    |  string  | Day of the horoscope |



#### Response

|   Parameter   |   Type   |           Description          |
|---------------|----------|--------------------------------|
|      date     |  string  |           Current date         |
| compatibility |  string  | Compatibility with other signs |
| lucky_number  |  integer |    Lucky number for the day    |
|  lucky_time   |  string  |      Lucky time for the day    |
|     color     |  string  |       Color for the day        |
|   date_range  |  string  |     Date range for the day     |
|      mood     |  string  |          Mood for the day      |
|  description  |  string  |      Description for the day   |

=====================================================================================

#### Usage

`POST: https://aztro.sameerkumar.website?sign= <sign> &day= <day>`


#### Example 

```
var request = require('request');

var options = {
url: 'https://aztro.sameerkumar.website/?sign=aries&day=today',
method: 'POST'
};

function callback(error, response, body) {
if (!error && response.statusCode == 200) {
    console.log(body);
}
}
request(options, callback);
```

#### Response

```
{"current_date": "June 23, 2017", "compatibility": " Cancer", "lucky_time": " 7am",
 "lucky_number": " 64", "color": " Spring Green", "date_range": "Mar 21 - Apr 20",
 "mood": " Relaxed", "description": "It's finally time for you to think about just
  one thing: what makes you happy. Fortunately, that happens to be a person who feels
  the same way. Give yourself the evening off. Refuse to be put in charge of anything."}
```

==========================================================================================================



### Start the app via local server

Navigate to the project directory in terminal and run:

`$npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Folder Structure


```
my-react-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
        Components/
            AffirmationAnswers.js
            AffirmationData.js
            AffirmationView.css
            AffirmationView.js
            MashupView.css
            MashupView.js
            NavBar.css
            NavBar.js
            SignView.css
            SignView.js
```

===================================================================================================

### Local Data Dependencies

Aside from the API, the app also uses local data files for the affirmations and to store the answers displayed when a user submits a question.

### AffirmationData.js

This is the local data file that contains the affirmations. The data is stored in an array of objects. The data is exported as a module.
The data is fetched by the AffirmationView.js file when the user interacts with the affirmation form.


#### Affirmation Form field

|   Parameter  |   Type   |         Description          |
|--------------|----------|------------------------------|
|     mood     |  string  |    Mood of the day           |



#### Response

|   Parameter    |   Type   |      Description     |
|----------------|----------|----------------------|
|  affirmation   |  string  |      Affirmation     |


#### AffirmationAnswers.js

This is the local data file that contains answers for the question field in the affirmation screen. The data is stored in an array of objects. The data is exported as a module.


#### Affirmation Form Question field

|   Parameter   |   Type   |      Description     |
|---------------|----------|----------------------|
|    question   |  string  |        Question      |



#### Response

| Parameter  |   Type   |      Description     |
|------------|----------|----------------------|
|    answer  |  string  |        Answer        |



==========================================================================================================

 _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
