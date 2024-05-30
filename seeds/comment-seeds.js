const { Comments } = require('../models');

const commentData = [
  {
    content: 'Shirts',
    post_id: 2,
    owner_id: 3
  },
  {
    content: 'lasdfkja;sldfkj;askdf',
    post_id: 2,
    owner_id: 3
  },
  {
    content: 'I was trained in your jedi arts by count dooku',
    post_id: 2,
    owner_id: 3
  },
  {
    content: 'Hello there',
    post_id: 2,
    owner_id: 3
  },
  {
    content: 'General Kenobi',
    post_id: 2,
    owner_id: 3
  },
];

const seedComments = () => Comments.bulkCreate(commentData, {individualHooks: true});

module.exports = seedComments;