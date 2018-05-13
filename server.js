const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'webpack.config.js')));

app.listen(8444, () => console.log('server running at port 3000'))
