require('dotenv').config()

//Seeds
const seedBlogUsers = require('./bloguser-seeds')
const seedcomments = require('./comment-seeds')
const seedposts = require('./post-seeds')

const sequelize = require('../config/connection')


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedBlogUsers();
    console.log('\n----- BlogUsers SEEDED -----\n');
  
    await seedposts();
    console.log('\n----- POSTS SEEDED -----\n');
  
    await seedcomments();
    console.log('\n----- Comments SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();