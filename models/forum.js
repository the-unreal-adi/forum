const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const forumSchema = new mongoose.Schema({
  title: String,
  description: String,
  discussions: [discussionSchema],
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
