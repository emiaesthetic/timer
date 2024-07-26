import {loadPost} from './render.js';

const init = () => {
  const paramsFromUrl = new URLSearchParams(window.location.search);
  const postID = paramsFromUrl.get('id');
  loadPost(postID);
};

init();
