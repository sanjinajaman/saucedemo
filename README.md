# Saucedemo Automation Testing with WebdriverIO

This project automates the end-to-end purchase flow for the Saucedemo website using WebdriverIO with JavaScript.
The project follows the Page Object Model(POM) structure for enhanced test maintainability and readability and generates test reports using the Allure Reporter.

## Project Overview

The automation suite covers key user interactions on the Saucedemo website, including:
- Verify user Login
- Testing specific user scenarios, such as locked_outuser, standard_user,performance_glitch_user.
- Filtering Product by product name
- Adding items to the cart
- Checkout process
- Verify total price without tax
- Verify total price with tax
- Verify Successul order
-Verify Logout


## Features

- WebdriverIO: Used for browser automation
- JavaScript: Language for writing tests
- Page Object Model: Ensures modular and maintainable code
- Allure Reporter: Provides detailed test reports

## Project Structure


saucedemo
   |---->test
   |       | 
   |       |
   |       |---->pages      # Page classes representing website elements
   |       |       |
   |       |       |---->checkout_information
   |       |       |              |
   |       |       |              |---->checkout_information_action.js
   |       |       |              |
   |       |       |              |---->checkout_information_locators.js
   |       |       |              
   |       |       | 
   |       |       |---->q1
   |       |       |      |---->q1_action.js
   |       |       |      |---->q1_locators.js
   |       |       | 
   |       |       |---->q2
   |       |       |     |
   |       |       |     |---->q2_action.js
   |       |       |     |---->q2_locators.js
   |       |       |
   |       |       |---->q3
   |       |             |---->q3_action.js
   |       |             |---->q3_locators.js
   |       |
   |       |---->specs  # Test cases organized by feature
   |       |       |
   |       |       |---->q1.spec.js
   |       |       |---->q2.spec.js
   |       |       |---->q3.spec.js
   |       |
   |       |---->utilities
   |
   |---->package-lock.json
   |
   |
   |
   |
   |---->package.json   # Project dependencies
   |
   |
   |
   |
   |---->wdio.conf.js   # WebdriverIO configuration file
   |
   |---->README.MD #Project documentation
  


How to setup package.json
npm init
package name
keywords
author
yes








How to install webdriverIO
npm i --save-dev @wdio/cli
npm init wdio@latest =>install webdriverIO



Go to package.json
change scripts for run file

rewrite scripts like this

"scripts":{

    "test":"wdio run ./wdio.conf.js"

} ,





How to install Allure


step 1: npm install @wdio/allure-reporter --save-dev
step 2: 
 reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporsting: false,
         disableWebdriverScreenshotsReporting: false,//this line add for take screenshot
    }]],

Add this wdio.conf.js file  || after reporters: ['dot'].


step3: 


afterTest: async function(
        test, 
        context, 
        { error, result, duration, passed, retries }
    ) {
        if (error){
            const screenshot=await browser.takeScreenshot();
            allure.addAttachment(
                "Screenshot",
                Buffer.from(screenshot, "base64"),
                "failure/png"
            );
        }
    },


//Add this lines of code afterTest //wdio.conf.js file


step 3:npm run test //running test create allure-results folder
step 4: npm i allure-commandline
step 5: allure generate allure-results //create allure report folder
//This command is used to create an Allure report from test result files stored in a specified directory.
It’s the main command for generating the report.

step 6: "getReport": "allure generate allure-results --clean && allure open"  //add this line package.json file into scripts
step 6:genarating report after next time create new report run this=>allure generate allure-results --clean
step 7:Got allure report run =>npm run getReport













How to clone this project


create a folder in your local machine=>mkdir projectname
Go to project folder=> cd projectname
clone repository=>git clone repository_url

