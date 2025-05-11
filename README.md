# node-express-contacts-app
A simple Contacts CRUD application to demo Node and Express

$ npm init
give entry point as server.js

create server.js file and add code

Install ExpressJs
$ npm install express

Install nodemon so that changes to source files will be monitored and automatically redeployed
$ npm i -D nodemon

install dotenv module
$ npm i dotenv

List the dependencies to verify
$ npm list

In package.json and modify "scripts" as below
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  }

Let us add .env file to specify port
PORT=5001

Install thunderclient vscode plugin to test apis. It is similar to Postman

start the server
$ npm run dev

Urls that can be tested
GET http://localhost:5001/api/contacts
POST http://localhost:5001/api/contacts
request Body
{
  "name": "Balaji",
  "email": "brengan@gmail.com",
  "phone": "9840099182"
}

GET http://localhost:5001/api/contacts/1
PUT http://localhost:5001/api/contacts/1
DELETE http://localhost:5001/api/contacts/1

program control flow: server.js --> routes.js --> controller.js

