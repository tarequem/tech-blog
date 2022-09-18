const { Post } = require('../models');

const postData = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    text_body: 'Lorem ipsum dolor sit amet, asdr adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adiasd, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedadsiusmod tempor incididuasd et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididasd labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuasdore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut asdore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labasdre magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uasdt dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempasdlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore asd. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad miasdnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.asd nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniasd ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exasdlamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim asdnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quiadrcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisasdtation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitasdsmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et asd. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    text_body: 'Lorem ipsum dolor sit amet, consectetur adipiasdlit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
