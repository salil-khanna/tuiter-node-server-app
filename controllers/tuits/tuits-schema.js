const mongoose = require('mongoose');

const schema = mongoose.Schema({
topic: String,
username: String,
handle: String,
time: String,
image: String,
title: String,
tuit: String,
likes: Number,
liked: Boolean,
replies: Number,
retuits: Number,
dislikes: Number,
}, {collection: 'tuits'});

module.exports = schema;