import {createPost} from './createElements.js';

const renderPosts = (data) => {
  const listWrapper = document.querySelector('.blog__list');
  listWrapper.innerHTML = '';

  data.forEach((item, index) => {
    const post = createPost(index, item);
    listWrapper.append(post);
  });
};

const updateArrowsState = (arrows, currentPage) => {
  const [prevArrow, nextArrow] = arrows;

  if (currentPage === 1) {
    prevArrow.classList.add('disabled');
  } else {
    prevArrow.classList.remove('disabled');
    prevArrow.href = `blog.html?page=${currentPage - 1}`;
  }

  if (currentPage === 3) {
    nextArrow.classList.add('disabled');
  } else {
    nextArrow.classList.remove('disabled');
    nextArrow.href = `blog.html?page=${currentPage + 1}`;
  }
};

const updatePaginationState = (pageNum) => {
  const links = document.querySelectorAll('.page-num');
  const arrows = document.querySelectorAll('.arrow');

  links.forEach((link, linkIndex) => {
    link.classList.toggle('active', pageNum - 1 === linkIndex);
  });

  updateArrowsState(arrows, pageNum);
};

export const loadPosts = async (page = 1) => {
  const postsUrl = `
    https://gorest.co.in/public/v2/posts?page=${page}&per_page=12
  `;
  const response = await fetch(postsUrl);
  const posts = await response.json();

  renderPosts(posts);
  updatePaginationState(page);
};
