# Challenge 1. Infinite Scroll

A React web application that implements an infinite scroll feature. 

## Description

Using React and React Hooks, I implemented a simple infinite scroll. Using the JSON data of Pinterest Pins provided, I display 6 'pins' at a time, until the window reaches the end. The application then waits 1.5 seconds until the next 6 pins display, and will continue to do so until it reaches the end of the JSON data.

Each pin displays the following:
  * Title, if provided.
  * Author of the pin.
  * Name of Collection from where the pin is from and hyperlink to the collection.
  * Image of the pin.
  * The number of Likes the pin has.
  * Description provided by the pin. 
  * Date the pin was created. 
  

## Getting Started

### Dependencies

* Make sure you are running the latest version of Windows 10 or Mac OS 
* Have the latest version of Node.js installed
* Node.js is a JavaScript runtime environment and will help us with installing and running React.
* Download Node.js here: https://nodejs.org/en/download/
* Have the latest version of React installed.
* 

### Installing

* Download the program from https://github.com/VNestor/infinite-scroll
* Make sure that the program is unzipped.


### Executing program

* Open a terminal window. Terminal in Mac OS. Windows Command Prompt or PowerShell in Windows. 
* In the terminal, make your way to the directory in which the program is saved.
* while in /infinite-scroll, run the command:
```
npm start.
```
* The program will open in your preferred browser under http://localhost:3000/

## Help

Use the following to ensure all neccesary programs are up to date:
* React update 
```
create-react-app
```
* Node update
```
npm cache clean -f
npm install -g n
```

## Authors

Victor Nestor 
Github: [@VNestor](https://github.com/VNestor)

## Version History

* 0.1
    * Working React App

## Acknowledgments

Thank you to Tech Talent Pipeline for this opportunity.
