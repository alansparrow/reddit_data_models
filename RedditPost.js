const mongoose = require('mongoose');

const redditPostSchema = new mongoose.Schema({
  title: {type: String, required: true},
  id: {type: String, unique: true, required: true},
  user: {type: String, required: true},
  subreddit_name_prefixed: {type: String, required: true},
});

const RedditPost = mongoose.model('RedditPost', redditPostSchema);

module.exports = RedditPost;
