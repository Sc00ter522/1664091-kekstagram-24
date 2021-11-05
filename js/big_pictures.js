const createBigPicture = function(data) {
  const bigPicture = document.querySelector('.big-picture');
  const pictureCancel = document.querySelector('#picture-cancel');
  const urlBigPicture = bigPicture.querySelector('.js-big-picture');
  const likesBigPicture = bigPicture.querySelector('.likes-count');
  const commentsBigPicture = bigPicture.querySelector('.comments-count');
  const descriptionBigPicture = bigPicture.querySelector('.social__caption');
  const commentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const body = document.querySelector('body');
  bigPicture.classList.remove('hidden');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  const onClosingWindow = function () {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  };
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      onClosingWindow();
    }
  });
  pictureCancel.addEventListener('click', () => onClosingWindow());
  urlBigPicture.src = data.url;
  likesBigPicture.textContent = data.likes;
  commentsBigPicture.textContent = data.comments.length;
  descriptionBigPicture.textContent = data.description;
  const createComment = function (i) {
    const comment = document.querySelector('#social__comment').content;
    const clonedElement = comment.cloneNode(true);
    const commentAvatar = clonedElement.querySelector('.social__picture');
    const textComment = clonedElement.querySelector('.social__text');
    const dataObject = data.comments[i];
    textComment.textContent = dataObject.message;
    commentAvatar.setAttribute('alt', dataObject.name);
    commentAvatar.src = dataObject.avatar;
    return clonedElement;
  };
  const comments = document.querySelector('.social__comments');
  comments.textContent = '';
  for (let i = 0; i < data.comments.length; i++) {
    const newComment = createComment(i);
    comments.appendChild(newComment);
  }
};

export {createBigPicture};
