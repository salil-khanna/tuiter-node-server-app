const mongoose = require('mongoose');
const tuitsSchema = require('./tuits-schema');

const tuitsModel = mongoose.model('TuitModel', tuitsSchema);

module.exports = tuitsModel;