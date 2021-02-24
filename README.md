[![Build Status](https://travis-ci.com/nraufu/To-do.svg?branch=develop)](https://travis-ci.com/nraufu/To-do)
[![Coverage Status](https://coveralls.io/repos/github/nraufu/To-do/badge.svg?branch=develop)](https://coveralls.io/github/nraufu/To-do?branch=develop)

# To-do
Backend for todo app
# features :sparkles:

- A  User can create an  account.
- A User can login into his account.
- A User can edit a task.
- A User can delete a task.
- A user can view all his tasks.
- A user can view a specific task.
- A User can view all queries.

# API Host :globe_with_meridians:
API endpoints are hosted [Here](https://to-do-app-00.herokuapp.com/)

# API Documentation :pencil:
API endpoints Documentation are hosted [Here](https://to-do-app-00.herokuapp.com/api-docs/)

## Technologies && Tools

* [NodeJS](https://nodejs.org/) - JavaScript Runtime Environment
* [ExpressJs](https://expressjs.com/) - A Minimal  Web Application Framework
* [MongoDb](https://www.mongodb.com/) - A document database, which means it stores data in JSON-like documents.
* [Mocha](mochajs.org) - A JavaScript test framework for Node.js programs, asynchronous testing, test coverage reports, and use of any assertion library

## Getting Started

 ### Prerequisites

 Ensure you have NodeJS installed on your computer by entering  `node -v ` on your terminal. If you don't have NodeJS installed go to the [NodeJS Website](https://nodejs.org/en/download/), and follow the download instructions
 
### Installation

Clone the app
* ```https://github.com/nraufu/To-do.git```

Install all the packages
* ```npm install ```

Run the server
*  ```npm start ```

## Testing
Run Test case
* ```npm run test```


## Working Routes :Truck:

| Endpoint                |             Functionality             |
| ----------------------- | :-----------------------------------: |
| POST /auth/signup       |   Used to can create an account       |
| POST /auth/login        |   Used to can login                   |
| POST /task/             |   Used to can create a task           |
| GET /task/              |   Used to can retrieve tasks          |
| GET /task/:id           |   Used to can retrieve a single task  |
| PATCH /posts/:id        |   Used to can edit a single task      |
| DELETE /posts/:id       |   Used to  delete a specific task     |

## License
- MIT

### Author :see_no_evil:

[NIYONZI Raufu](https://github.com/nraufu/) ✌😎
