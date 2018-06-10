# [Request Header Parser Microservice](https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a full stack JavaScript app that is functionally similar to this: https://dandelion-roar.glitch.me/

## Solution

- Implemented using the [express](http://expressjs.com/) library.
- A single route handler is used to match the API path.
- It looks for the IP address, language, and software in the headers of the HTML request.
- In the case of the IP address, the program will look to see if the request has been forwarded on behalf of the client. If not, it will take remote address of the connection.
