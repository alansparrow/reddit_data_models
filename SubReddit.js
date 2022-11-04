const mongoose = require('mongoose');

const subRedditSchema = new mongoose.Schema({
  public_description: {type: String, required: true},
  subreddit_name_prefixed: {type: String, required: true, unique: true},
  subscribers: {type: Number, required: true},
});

const SubReddit = mongoose.model('SubReddit', subRedditSchema);

module.exports = SubReddit;
