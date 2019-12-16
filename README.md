# Google-Sheets-and-Trello-Slack-Bot

A Slack bot that can fetch data from Google Sheets files and Trello Dashboards.

## Create A Slack Bot


### 1. Create a Slack App in the your desired Workspace:

<img src=screenshots/1.png width="49%" height="50%"> <img src=screenshots/2.png width="49%" height="50%">

### 2. Add a bot user to the Slack App:

<img src=screenshots/3.png width="50%" height="50%">

<img src=screenshots/4.png width="50%" height="50%">

#### (Make is "Always Show My Bot as Online" is Off)
<img src=screenshots/5.png width="50%" height="50%">

#### (Bots and Permissions show be enabled now)
<img src=screenshots/6.png width="50%" height="50%">

### 3. Install the Slack App in your Workspace:

<img src=screenshots/7.png width="49%" height="50%"> <img src=screenshots/8.png width="49%" height="50%">

#### (You should have a Bot User OAuth Access Token now. Copy this because you'll need it later) 
<img src=screenshots/9.png width="50%" height="50%">

#### ("Add features and functionality" and "Install your app to your workspace" should now be enabled)
<img src=screenshots/10.png width="50%" height="50%">

#### (When you go to your Slack Workspace you should see your bot in the Apps section)
<img src=screenshots/11.png width="150" height="500">

### 4. Download and Install Node.js

https://nodejs.org/en/download/

### 5. Create a directory/folder for your project

### 6. In terminal/command prompt, CD to the project folder(or open the terminal/command prompt in the project folder)

### 7. Run the command: npm init
![](screenshots/12.PNG)

#### (You should now have a package.JSON file in your project file)
![](screenshots/13.PNG)

![](screenshots/14.PNG)

### 8. Download or copy the code in index.js file from this GitHub:

#### Download the ZIP file and extract(uncompress) the files
![](screenshots/15.PNG)

### OR!

#### Clone the GitHub using Terminal/Command Prompt with the command:  
git clone https://github.com/YawFrempong/Google-Sheets-Trello-Slack-Bot

![](screenshots/16.PNG)

#### Copy the index.js file from the GitHub repository you downloaded to your project folder:

![](screenshots/17.PNG)

![](screenshots/18.PNG)

### 9. In terminal/command prompt, CD to the project folder(or open the terminal/command prompt in the project folder). Install the required dependencies:
    
    npm install slackbots
    npm install google-spreadsheet
    npm install trello

### 10. You should have a package-lock.JSON file and node_modules folder now.

![](screenshots/19.PNG)

#### (You package.JSON file should look like this now)
![](screenshots/20.PNG)

### 11. Enter the Bot User OAuth Access Token and Bot Name into the SlackBot constructor:

![](screenshots/21.PNG)

<img src=screenshots/22.png width="49%" height="50%"><img src=screenshots/23.png width="49%" height="50%">

![](screenshots/24.PNG)



## Integrate Trello


### 12. Create a Trello account and Login If you don't already have one. 

### 13. Got to: https://trello.com/app-key

<img src=screenshots/25.png width="50%" height="50%">

#### (Trello Developer API Key)
<img src=screenshots/26.png width="50%" height="50%">

### 14. Copy the link and replace {YourAPIKey} with your Trello Developer API Key

![](screenshots/27.png)

![](screenshots/28.png)

### 15. Press Allow to generate an OAuth Token

<img src=screenshots/29.png width="50%" height="50%">

<img src=screenshots/30.png width="50%" height="50%">

### 16. Copy the API Key and OAuth Token into the Trello constructor:

![](screenshots/31.PNG)

![](screenshots/32.PNG)

### 17. Copy the URL Code from your Trello Board and put it in the getListsOnBoards() function:

![](screenshots/34.PNG)

![](screenshots/33.PNG)

![](screenshots/35.PNG)




## Integrate Google Sheets


### 18. Go to Google Developers Console: https://console.developers.google.com

### 19. Click on the project tab on the top left:

<img src=screenshots/35_2.png width="50%" height="50%">

### 20. Create a new project

<img src=screenshots/36.png width="50%" height="50%">

<img src=screenshots/37.png width="50%" height="50%">

### 21. Enable the Google Drive API:

<img src=screenshots/38.png width="50%" height="50%">

<img src=screenshots/39.png width="50%" height="50%">

<img src=screenshots/40.png width="50%" height="50%">

### 22. Generate and download a Google Drive JSON file:

<img src=screenshots/41.png width="49%" height="50%"> <img src=screenshots/42.png width="49%" height="50%">

<img src=screenshots/43.png width="49%" height="50%"> <img src=screenshots/44.png width="49%" height="50%">

### 23. Copy the JSON file into your project folder and rename the file to "client_secret":

![](screenshots/45.PNG)

![](screenshots/46.PNG)

### 24. Copy the client email address from the client_secret.JSON file and share your Google Spreadsheets with that email:

![](screenshots/47.PNG)

<img src=screenshots/48.PNG width="75%" height="75%">

### 25. Add your Google Sheets URL ID to the sheets array in index.js

![](screenshots/49.PNG)

![](screenshots/50.PNG)

![](screenshots/51.PNG)

### 26. Change the code in the phase_2() function in index.js to match your use:

![](screenshots/sheets_example.png)

![](screenshots/54.PNG)

![](screenshots/55.PNG)

### 27. In terminal/command prompt, CD to the project folder(or open the terminal/command prompt in the project folder)

### 28. Run the code to turn on the bot with this command: node index.js

![](screenshots/56.PNG)

### 29. Go to your Slack Workspace and test out the bot:

<img src=screenshots/57.png width="125" height="750">

![](screenshots/58.png)

<img src=screenshots/59.png width="75%" height="75%">

<img src=screenshots/60.png width="50%" height="50%">

### Congrats you have the bot working. Continue to add code to the index.js file to add more functionality.



## Deploy the Bot to Run on the Cloud using Google Cloud and Kubernetes

Build a Slack Bot with Node.js on Kubernetes(Tutorial): https://codelabs.developers.google.com/codelabs/cloud-slack-bot/index.html#0

More hosting options(AWS, Microsoft Azure, IBM Cloud, Heroku, etc): https://api.slack.com/docs/hosting

## Helpful Resources(Node.js Libraries)

Google Spreadsheets: https://www.npmjs.com/package/google-spreadsheet
Slackbots: https://www.npmjs.com/package/slackbots
Trello: https://www.npmjs.com/package/trello

## Helpful Resources(YouTube Videos)

Build A Slackbot: https://www.youtube.com/watch?v=nyyXTIL3Hkw

Google Sheets and JavaScript with Node.js: https://www.youtube.com/watch?v=UGN6EUi4Yio

Building a Serverless Slack App with AWS and Serverless Framework: https://www.youtube.com/playlist?list=PLGyRwGktEFqd_Xjg-MwyUbsmT1_X_q_oU

## Helpful Resources(API Documentation)

Slack API: https://api.slack.com/

Trello API: https://developers.trello.com/reference#introduction
