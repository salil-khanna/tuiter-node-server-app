const tuitsModel = require('./tuits-model');

const findTuits = () => tuitsModel.find();
const createTuit = (tuit) => tuitsModel.create(tuit);
const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid});
const updateTuit = (tid, tuit) => tuitsModel.updateOne({_id: tid}, {$set: tuit})

module.exports = {
    findTuits,
    createTuit,
    deleteTuit,
    updateTuit
}