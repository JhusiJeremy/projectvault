// src/server/controllers/blogController.js

import mongoose from 'mongoose';
import Blog from '../models/blog';
import _ from 'underscore';
import express from 'express';

var blogController = express.Router();

/*// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
blogController.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});*/

blogController.route("/blogs/:id?").get(getBlogs).post(addBlog);

function getBlogs(req, res) {
    Blog.find(function (err, blogs) {
        if (err)
            res.send(err);
        else
            res.json(blogs);
    });
}

function addBlog(req, res) {
    let blog = new Blog(_.extend({}, req.body));
    blog.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(blog);
    });
}

export default blogController;