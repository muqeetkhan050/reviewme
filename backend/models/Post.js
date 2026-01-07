

// const mongoose = require('mongoose');

// const postSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     author: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
//     content: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Post', postSchema);
// backend/models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  upvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  downvotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  createdAt: { type: Date, default: Date.now },
});

// Virtual field for vote count
postSchema.virtual('voteCount').get(function() {
  return this.upvotes.length - this.downvotes.length;
});

// Make sure virtuals are included when converting to JSON
postSchema.set('toJSON', { virtuals: true });
postSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Post', postSchema);