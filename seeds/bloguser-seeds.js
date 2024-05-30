const { BlogUsers } = require('../models');

const bloguserData = [
  {
    username: 'Shirts',
    password: 'nogood'
  },
  {
    username: 'Shorts',
    password: 'nogood1'
  },
  {
    username: 'Music',
    password: 'nogood2'
  },
  {
    username: 'Hats',
    password: 'nogood3'
  },
  {
    username: 'Shoes',
    password: 'nogood4'
  },
];

const seedBlogUsers = () => BlogUsers.bulkCreate(bloguserData, {individualHooks: true});

module.exports = seedBlogUsers;