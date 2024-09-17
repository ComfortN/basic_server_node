# Basic Node.js Server

## Overview

This project is a simple HTTP server built with Node.js. It demonstrates handling multiple routes and HTTP request methods, including GET, POST, and PUT. The server can respond with plain text or JSON data.

## Features

* Handles GET and POST requests at the root URL (/).
* Handles GET and PUT requests at the /about URL.
* Responds with appropriate HTTP status codes for different request methods.
* Parses JSON request bodies and handles invalid JSON gracefully.
* Includes basic error handling for server errors and uncaught exceptions.


## Requirements

* Node.js (version 20.9.0 or higher)

## Installation

1. Clone this repository to your local machine:

```
    git clone <repository-url>
```


2. Navigate to the project directory:

```
    cd basic-nodejs-server
```


3. Install the required dependencies:

```
    npm install
```


## Usage

1. Start the server:

```
    node server.js
```

2. The server will run on http://localhost:8887. You can interact with it using tools like curl or Postman.


## Endpoints

### Root URL (/)

* GET: Returns a welcome message.

```
    curl -X GET http://localhost:8887/
```


* POST: Accepts JSON data and responds with the received data.

```
    curl -X POST -H "Content-Type: application/json" -d '{"key":"value"}' http://localhost:8887/
```

### About URL (/about)

* GET: Returns server information in JSON format.

```
    curl -X GET http://localhost:8887/about
```

* PUT: Accepts JSON data to update server information and responds with the updated data.

```
    curl -X PUT -H "Content-Type: application/json" -d '{"name":"Updated Server","description":"An even better server"}' http://localhost:8887/about
```


## Error Handling

The server includes basic error handling for:

* Server errors, logged to the console.
* Uncaught exceptions, which cause the server to exit gracefully.


