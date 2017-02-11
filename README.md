# [Request Header Parser Microservice](https://www.freecodecamp.com/challenges/request-header-parser-microservice)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a full stack JavaScript app that is functionally similar to this: https://cryptic-ridge-9197.herokuapp.com/api/whoami/ and deploy it to Heroku.

1. User Story: I can get the IP address, language and operating system for my browser.

## Solution

* Implemented using the [express](http://expressjs.com/) library.
* A single route handler is used to match the root of the URL.
* It looks for the IP address, language, and software in the headers of the HTML request.
* In the case of the IP address, the program will look to see if the request has been forwarded on behalf of the client. If not, it will take remote address of the connection.
