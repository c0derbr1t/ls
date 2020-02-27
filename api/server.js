const express = require('express');
// code prefreences user snippets javascript
/*
"Node Require": {
    "prefix": "rem",
    "body": "const $1 = require($1$2);$0",
    "description": "Node Require"
}
*/
const helmet = require("helmet");
const cors = require("cors");

const cohortsRouter = require('../cohorts/router.js')
const studentsRouter = require('../students/router.js')

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes
server.use("/api/cohorts", cohortsRouter);
server.use("/api/students", studentsRouter);

server.get('/', (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;


