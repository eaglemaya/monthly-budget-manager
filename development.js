const path = require('path');
const dotenv = require('dotenv');

// load common env
dotenv.config({ path: path.resolve(__dirname, 'dev/.env.common') });

const server = require("./server");