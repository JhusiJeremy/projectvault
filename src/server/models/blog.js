// src/server/models/blog.js

import mongoose from 'mongoose';

var blogSchema = mongoose.Schema({
    title: String,
    date: { type: Date, default: Date.now },
    imgUrl: String,
    tags: [String],
    content: String
});

var Blog = mongoose.model("Blog", blogSchema);

export default Blog;