
require('dotenv').config()
const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

app.listen(process.env.NODE_DOCKER_PORT, () => console.log(`server listening on port ${process.env.NODE_DOCKER_PORT}`));
