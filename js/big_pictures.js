const DEFAULT_COUNT_NUMBER = 5;

const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const comments = document.querySelector('.social__comments');

const createComments = function (i, data) {
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

const addComments = function (count, data) {
  comments.textContent = '';
  for (let i = 0; i < count; i++) {
    const newComment = createComments(i, data);
    comments.appendChild(newComment);
  }
};

const createBigPicture = function(data) {
  const pictureCancel = document.querySelector('#picture-cancel');
  const urlBigPicture = bigPicture.querySelector('.js-big-picture');
  const likesBigPicture = bigPicture.querySelector('.likes-count');
  const commentsBigPicture = bigPicture.querySelector('.comments-count');
  const descriptionBigPicture = bigPicture.querySelector('.social__caption');
  const commentsActive = document.querySelector('.comments-active');
  const body = document.querySelector('body');
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  urlBigPicture.src = data.url;
  likesBigPicture.textContent = data.likes;
  commentsBigPicture.textContent = data.comments.length;
  descriptionBigPicture.textContent = data.description;
  let countNumber = 5;
  commentsActive.textContent = countNumber;
  addComments(countNumber, data);
  commentsLoader.classList.remove('hidden');
  const onLoaderClick = function () {
    const commentsAllCount = +commentCount.textContent;
    countNumber += DEFAULT_COUNT_NUMBER;
    if(countNumber >= commentsAllCount) {
      countNumber = commentsAllCount;
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
    }
    commentsActive.textContent = countNumber;
    addComments(countNumber, data);
  };
  commentsLoader.addEventListener('click', onLoaderClick);
  const onClosingWindow = function () {
    commentsLoader.removeEventListener('click', onLoaderClick);
    pictureCancel.removeEventListener('click', onClosingWindow);
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  };
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      onClosingWindow();
    }
  });
  pictureCancel.addEventListener('click', onClosingWindow);
};

export {createBigPicture};
