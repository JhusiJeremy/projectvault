// src/data/blogs.js
/*
each blog = {
  'id', 'title', 'date', 'category': string,
  'img', 'tags', 'content': [string, ]
}
*/

const blogs = [
  {
    'id': '0',
    'title': 'Day 0 - Test',
    'date': 'October 19 2016',
    'imgUrl': '/img/MonkeyAvatar.jpeg',
    'tags': ['CSS', 'HTML', 'React'],
    'content': 'Day zero, working on the nav bar, learning CSS & HTML. ES6 react create class method: No COMMA!'
  },
  {
    'id': '1',
    'title': 'Day 1 - Test',
    'date': 'October 20 2016',
    'imgUrl': '/img/The-Plan.jpg',
    'tags': ['CSS'],
    'content': 'Day one, working on the CSS.'
  },
  {
    'id': '2',
    'title': 'Day 2 - Test',
    'date': 'October 21 2016',
    'imgUrl': '/img/The-Plan.jpg',
    'tags': ['React'],
    'content': 'Day two, figured out how to access to the location props, where you can read the current url.'
  },
  {
    'id': '3',
    'title': 'Leetcode - Merge k Sorted List',
    'date': 'October 22 2016',
    'imgUrl': '',
    'tags': ['Algorithm', 'C++'],
    'content': '两种方法，第一种是用heap储寸k个list的头node，每次pop出最小的那个node，接到输出结果的后面，并将此node的下一个node压入heap。 \
    第二种方法则是类似merge sort的方式，两两合并，直至最终合并成一个list。祝各位刷题愉快。'
  },
  {
    'id': '4',
    'title': 'OPT被拒，Exos me?',
    'date': 'October 22 2016',
    'img': '',
    'tags': ['OPT', '留学生活'],
    'content': '这是一次OPT被拒的悲惨经历以及解决办法。'
  },
  {
    'id': '5',
    'title': '巴城生活有感',
    'date': 'October 22 2016',
    'img': '',
    'tags': ['留学生活'],
    'content': '在巴城呆了近两年，既经历了暴力事件，也遭遇了近几年最大的雪（灾）。离开的时候却有几分想念。'
  },

];

export default blogs;
