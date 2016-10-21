// src/data/blogs.js
/*
each blog = {
  'id', 'title', 'date', 'img', 'category': string
  'tags': [string, ],
  'content': string
}
*/

const blogs = [
  {
    'id': '0',
    'title': 'Day 0',
    'date': 'October 19 2016',
    'img': '/img/MonkeyAvatar.jpeg',
    'category': 'technical',
    'tags': ['CSS', 'HTML', 'React'],
    'content': 'Day zero, working on the nav bar, learning CSS & HTML. ES6 react create class method: No COMMA!'
  },
  {
    'id': '1',
    'title': 'Day 1',
    'date': 'October 20 2016',
    'img': '',
    'category': 'technical',
    'tags': ['CSS'],
    'content': 'Day one, working on the CSS.'
  },
  {
    'id': '2',
    'title': 'Day 2',
    'date': 'October 21 2016',
    'img': '',
    'category': 'technical',
    'tags': ['React'],
    'content': 'Day two, figured out how to access to the location props, where you can read the current url.'
  },
  {
    // ...
  }
];

export default blogs;