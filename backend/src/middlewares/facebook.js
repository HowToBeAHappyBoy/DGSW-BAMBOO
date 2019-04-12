const axios = require('axios');
const { FB } = require('config/serverconfig.json');

const uploadPhoto = url => new Promise((resolve, reject) => {
  axios
    .post('https://graph.facebook.com/267795647464500/photos', {
      url,
      published: false,
      access_token: FB,
    })
    .then(response => resolve(response.data))
    .catch(error => reject(error.message));
});

exports.uploadWithImg = async (imgs, data) => {
  const ids = [];
  try {
    for (const img of imgs) {
      await uploadPhoto(img.url)
        .then((res) => {
          ids.push({ media_fbid: res.id });
        })
        .catch(e => ({
          type: 'error',
          error: e.response.error.message,
        }));
    }
    const feed = await axios.post('https://graph.facebook.com/267795647464500/feed', {
      attached_media: ids,
      message: data,
      access_token: FB,
    });
    return {
      type: 'success',
      feed,
    };
  } catch (error) {
    return {
      type: 'error',
      error: error.response.error.message,
    };
  }
};

exports.uploadWithoutImg = async (data) => {
  try {
    const feed = await axios.post('https://graph.facebook.com/267795647464500/feed', {
      message: data,
      access_token: FB,
    });
    return {
      type: 'success',
      feed,
    };
  } catch (error) {
    console.log(error);
    return {
      type: 'error',
      error: error.response.error.message,
    };
  }
};
