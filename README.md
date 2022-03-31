# RANKING APP

Command-line application that will calculate the ranking table for a league.

## 1. Steps to setup the program

After you done cloning the repo, you'll need to setup this project, install necessary files in other to run it. please follow these steps: 

1. install all the npm packages by using the command 
`npm i`
2. Run `npm run build` to compile ts files

3. From the root folder run `node build/main.js --testApp` to check if the cmd app is runing it should return 
`App name: ranking-app"`

## 2. Installing the app (Optional)

1. You can install the by running `npm install .`
2. after installation you can run the app using `ranking-app --testApp`


## 3. Passing arguments to our app(Input/Output)

Our app accept both text and file name
##### 3.1 Text Argument 
use `--text` for passing a text
###### using node
e.g here is the example if you're using nodejs to run the app:
 `node build/mail.js --text='"Lions 3, Snakes 3\nTarantulas 1, FC Awesome 0\nLions 1, FC Awesome  \nTarantulas 3, Snakes 1\nLions 4, Grouches 0"'` 

###### if you installed the app
e.g here is the example if you're using nodejs to run the app:
 `ranking-app --text='"Lions 3, Snakes 3\nTarantulas 1, FC Awesome 0\nLions 1, FC Awesome  \nTarantulas 3, Snakes 1\nLions 4, Grouches 0"'` 



##### 3.2 File Argument 
use `--file` for passing a text
###### using node
e.g here is the example if you're using nodejs to run the app:
 `node build/mail.js --file="filepath/file.txt"` 

###### if you installed the app
e.g here is the example if you're using nodejs to run the app:
 `ranking-app --file='filepath/file.txt'` 

## 4. Testing
I am using jest for texting, use the following commands to run tests `npm run test`