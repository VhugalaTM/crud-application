PROJECT NAME:
CRUD Application

DESCRIPTION:
This is a CRUD application which allows a user to create, read, update, delete the data stored in the database. This system was developed using REACT, PHP and MySQL as our database.

INSTALLATION:
HOW TO SETUP REACT LIBRARY
* Install Node js and open the terminal of your text editor or you can use the command prompt
* To create the React app we will be using a built tool called Vite
* Create a folder and paste it on VS code or any other text-editor

HOW TO CONFIGURE VITE
* Open terminal of VS code and Define the following commands
1. npm create vite@latest [project-name] / npm create vite@[enter version of of vite] [project name]
2. After running the command, you will select the Framework of your choice: 
	- In this case we will select the React Framework
3. Once you have selected the framework, you have to select the variant(type of script): 
	- You will select 'Javascript' variant
4. Install the node modules, by running a command that access the react project:
	- cd [project-name]
	- npm install
	- npm install axios
	- npm install react-router-dom

* Copy the downloaded folder in the react folder created and replace the app.jsx with the downloaded app.jsx
* Install XAMPP and copy the downloaded folder called reactAPI to C://xampp/htdocs
* Open XAMPP and 'start' the APACHE and MySQL module, always run XAMPP so that react can access the php file connecting the to MySQL database
* To import database click admin on the MySQL module row of XAMPP or write localhost/phpmyadmin and at the top of DBMS UI on left side, be on a lookout for a tab a called IMPORT and import the mysql file downloaded
  
5. To run the built tool define following command on :
	- npm run dev
* This will display the localhost link, which you will be using to run or test your code
6. To resume to creating your react app after exiting your coding session:
	- Open the terminal and run the following command:
	- cd [project-name]
	- npm run dev
	- click the localhost and continue making changes

