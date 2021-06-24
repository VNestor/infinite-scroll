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

### Installing

* Download the program from https://github.com/VNestor/infinite-scroll
* Make sure that the program is unzipped.


### Executing program

* Open a terminal window. Terminal in Mac OS. Windows Command Prompt or PowerShell in Windows. 
* In the terminal, make your way to the directory in which the program is saved.
* Go into the directory infinite-scroll/infinite-scroll/
* while in infinite-scroll/infinite-scroll/, run the command:
```
npm start.
```
* The program will open in your preferred browser under http://localhost:3000/

## Output
### When program is executed, only 6 pins are loaded.
![TTPScreenshot 1](https://user-images.githubusercontent.com/37969271/123192215-750acd80-d470-11eb-9498-f9386cec0e78.PNG)


### When we keep scrolling, the pins stop updating when there we've reached the end of the JSON data.
![TTPScreenshot 2](https://user-images.githubusercontent.com/37969271/123192368-c3b86780-d470-11eb-8323-5b1b6fe438b9.PNG)


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
