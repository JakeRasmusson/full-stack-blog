const { Post } = require('../models');

const postData = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Test 1',
    owner_id: 3
  },
  {
    content: 'lasdfkja;sldfkj;askdf',
    title: 'Test 2',
    owner_id: 1
  },
  {
    content: 'I was trained in your jedi arts by count dooku',
    title: 'Test 3',
    owner_id: 2
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title: 'Test 4',
    owner_id: 3
  },
  {
    content: 'General Kenobi',
    title: 'Test 5',
    owner_id: 5
  },
];

const seedPosts = () => Post.bulkCreate(postData, {individualHooks: true});

module.exports = seedPosts;