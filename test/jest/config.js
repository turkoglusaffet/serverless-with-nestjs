const dotenv = require('dotenv');
const path = require('path');

const envfile = path.join(__dirname, 'test.properties');

dotenv.config({
    path: envfile,
    debug: true
});