# Portland Doctors

#### Find a doctor in Portland, 9/14/2019

#### By Christopher Burge

## Description

This website calls data from the BetterDoctor API and returns a list of doctors in the Portland area based on the user's search query. The user can search by either name or symptom.

## Setup/Installation Requirements

* Go to your terminal
* Clone project from GitHub
* Run $ npm install to install dependencies
* Go to developer.betterdoctor.com and request and API key
* Store your API key in the .env file after exports.apiKey=
* In the terminal type $ npm run start

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
|Notifies user if the search didn't have results|'sdfasdfs'|'Please try a new search...'|
|Results are displayed when user searches by name|'Alison'|'Up to 10 results are displayed'|
|Results are displayed when user searches by symptom/keyword|'Toothache'|'Up to 10 results are displayed'|

## Known Bugs

None

## Technologies Used

* JavaScript
* JQuery
* Webpack
* Babel
* ESLint
* Jasmine
* BetterDoctor API

Copyright (c) 2019 **Christopher Burge**
