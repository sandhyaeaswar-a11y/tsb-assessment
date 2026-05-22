# UI Automation

The project automates the search functionality on the homepage (tmsandbox.co.nz) using playwright & javascript. 

## Pre-requiste

1. Node.js

## Steps to run the test on Windows

1. Open command prompt.
1. Change directory to a suitable location on filesystem to clone the project
1. Clone the repository & change directory in terminal into the clone repository
1. Run the following command to install playwright & cucumber for playwright.  
	`npm install playwright @cucumber/cucumber playwright-cucumber`
	`npx playwright install`
1. Execute the following command to run the feature file  
	`npx cucumber-js features/search.feature`
