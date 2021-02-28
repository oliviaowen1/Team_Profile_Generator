# Team_Profile_Generator

## Table of Contents

* [Description](#Description)
* [Demonstration](#Demonstration)
* [Installation](#Installation)
* [Improvements](#Improvements)
* [License](#License)



# Description
The aim of this project was to create a command-line application that produces a team profile based on each member that the user inputs.

For a manager, this will display their name, employee ID, email address, and office number.

For an engineer this will display their name, ID, email, and GitHub username.

For an intern this will display their name, ID, email, and school.

This application will allow users to create a HTML file based on their answers to the questions. They will need to download the repository and node and run the file within the terminal and Node.js in order to answer these questions. From there, their answers will automatically save to a HTML file which will allow them to open this HTML and see their team profile.

# Demonstration
Please see screenshots of the working application below:

Here is the questions the user is asked:
![Screenshot of questions](https://raw.githubusercontent.com/oliviaowen1/Team_Profile_Generator/main/assets/questions.png)

Here is the HTML page that is created from thids:
![Screenshot html page](https://raw.githubusercontent.com/oliviaowen1/Team_Profile_Generator/main/assets/index.html%20page.png)

Here is the tests that have been passed once they have been run:
![Screenshot of tests](https://raw.githubusercontent.com/oliviaowen1/Team_Profile_Generator/main/assets/terminal%20tests.png)


You can see below the questions that the user is being asked, as well as the page that this has created and an example of this opening the autofilled email application:
Please see a video of the working application [here](https://drive.google.com/file/d/1rAj99CeWcAoeLHlqS3fVF9hLtFffOEIa/view)


And please see the tests that have all been passed [here](https://drive.google.com/file/d/1TcUll-uYcyVlj0k_g8NMnTcegIFvzZDs/view)

You can also access the example Index.html file that has been created [here](https://github.com/oliviaowen1/Team_Profile_Generator/blob/main/dist/index.html)

# Installation 
In order to use this application, users will need to download the repository as well as download node.js in order for the application to run in the terminal. 

The application will begin when the user enters "node index.js" with asking for the managers information (name, employee ID, email address, and office number). It will then ask if the user would like to add either an engineer, intern or if they are done entering employees. This allows the user to add other staff whilst limiting them to only adding one manager. 

Based on who they would like to add, they will then be taken to the questions regarding that staff member, should it be an engineer they will be asked for their name, ID, email, and GitHub username, or should it be an intern their name, ID, email, and school. If the user confirms they are done adding staff members, this will alert them that their file is complete. 

In order to carry out tests, the user must download the jest package and run "npm run test" in order to run the tests that are set up. These all meet the requirements and pass, as seen in the demonstration above.

This application can be used as many times as necessary in order for the user to get the file they require. If needed a user can also ammend the HTML file as necessary. 

# Improvements
If i were to have the opportunity to continue with this project, i would like to add styling to the HTML page.


# License
![license: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
