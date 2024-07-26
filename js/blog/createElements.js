export const createPost = (index, obj) => {
  const postWrapper = document.createElement('li');
  postWrapper.classList.add('blog__item');

  const post = document.createElement('article');
  post.classList.add('card');
  post.innerHTML = `
    <img
      class="card__image"
      src="https://loremflickr.com/400/400?${index}"
      alt="" width="195" height="195" loading="lazy"
    >
    <h2 class="card__title">
      <a
        class="card__link
        article-link"
        href="article.html?id=${obj.id}">${obj.title.slice(0, 50).trim()}...
      </a>
    </h2>
  `;

  postWrapper.append(post);
  return postWrapper;
};
