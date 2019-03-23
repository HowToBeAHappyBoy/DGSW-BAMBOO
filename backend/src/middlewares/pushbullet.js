const axios = require('axios');
const {
  PUSH,
} = require('config/serverconfig.json');

exports.push = async () => {
  await axios.post('https://api.pushbullet.com/v2/pushes', {
    type: 'note',
    title: '대숲 제보 와써요!',
    body: '얼른 뭐든 하라구',
  },
  {
    headers: {
      'Access-Token': PUSH,
    },
  });
};
