const fb = require('fb');

const {
  FB,
} = require('config/serverconfig.json');

fb.setAccessToken(FB);

exports.uploadWithImg = async (imgs, data) => {
  const ids = [];
  console.log(imgs);
  try {
    const upload = imgs.map(async (img) => {
      img.id = await fb.api('/photos', 'post', { url: img.url, caption: img.caption, published: false });
    });
    await Promise.all(upload);
    imgs.map((e) => {
      console.log(e);
      ids.push({
        media_fbid: e.id.id,
      });
      delete e.id;
    });
    console.log(ids);
    const feed = await fb.api('/feed', 'post', { attached_media: ids, message: data });
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

exports.uploadWithoutImg = async (data) => {
  try {
    const feed = await fb.api('/feed', 'post', { message: data });
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