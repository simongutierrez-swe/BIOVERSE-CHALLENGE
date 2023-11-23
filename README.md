<p align="center">
   <img src="my-ticket-manager/client/public/icon.gif" height=200 width=200> 
</p>

# My-Ticket-Manager

Have you ever waited forever for a help desk ticket to get addressed? Have you just flat out never gotten a response on your request? Well I have the solution just right for you! Welcome to My-Ticket-Manager a web app that allows users to put in a ticket that visually shows the status as well as a response to said ticket in real time. This app was made using react, express, and postgres.

## How It Works

|     Create a Ticket                   
| ------------------------- |
| ![Output sample](my-ticket-manager/client/public/create-ticket.gif)| 

Create a ticket by entering your name, email and a description.

|     Admin                   
| ------------------------- |
| ![Output sample](my-ticket-manager/client/public/admin.gif)| 

Admin will have the ability to access to your ticket, update the status of the ticket, respond and delete.

### Setting Up Dev Environment:
Backend:
- first go to run and restart postgres service and run psql shell to connect
- open gui optional
- create Pool
- in shell : CREATE DATABASE bioverse;   \c bioverse;
- dont forget to change file `db.js` with your server credentials
- make database sql accourding to your need then copy and paste it in shell
- CD into folder Backend and run `npm install` then `npm start-server`
- you should get a response stating 'server has started on port 5000'

Frontend:
- CD into the client folder and run `npm/yarn install`
- Run `npm/yarn build`
- Run `npm/yarn start`

Deploy Link: TBD

Useful links for begining :

- https://www.youtube.com/watch?v=ldYcgPKEZC8
- https://github.com/ousecTic/pern-todo-app
- https://www.youtube.com/watch?v=6LnE7b8DcWM&
