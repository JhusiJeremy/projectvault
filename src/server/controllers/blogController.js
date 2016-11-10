// src/server/controllers/blogController.js

import mongoose from 'mongoose';
import Blog from '../models/blog';
import _ from 'underscore';
import express from 'express';

let blogController = express.Router();

blogController.route("/blogs/:id?").get(getBlogs)/*.post(addBlog).delete(deleteBlog)*/;

function getBlogs(req, res) {
  let query = {}
  if (req.params.id) query._id = req.params.id;
  Blog.find(query, function (err, blogs) {
      if (err)
          res.send(err);
      else
          res.json(blogs);
  });
}
/*
function addBlog(req, res) {
  let blog = new Blog(_.extend({}, req.body));
  blog.save(function (err) {
      if (err)
          res.send(err);
      else
          res.json(blog);
  });
}

function deleteBlog(req, res) {
  let id = req.params.id;
  Blog.remove({ _id: id }, function (err, removed) {
      if (err)
          res.send(err)
      else
          res.json(removed);
  });
}
*/
export default blogController;
