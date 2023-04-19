const express = require('express');
const cors = require('cors');
const HelloController = require('./controllers/hello-controller');
const UserController = require('./controllers/users/users-controller');
const TuitsController = require('./controllers/tuits/tuits-controller');
const mongoose = require('mongoose');

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')
})
// TuitsController(app);
// HelloController(app)
// UserController(app)
app.listen(process.env.PORT || 4000);
module.exports = app;