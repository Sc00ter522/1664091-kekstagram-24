const createBigPicture = function(data) {
  const bigPicture = document.querySelector('.big-picture');
  const pictureCancel = document.querySelector('#picture-cancel');
  const urlBigPicture = bigPicture.querySelector('.js-big-picture');
  const likesBigPicture = bigPicture.querySelector('.likes-count');
  const commentsBigPicture = bigPicture.querySelector('.comments-count');
  const descriptionBigPicture = bigPicture.querySelector('.social__caption');
  bigPicture.classList.remove('hidden');
  urlBigPicture.src = data.url;
  likesBigPicture.textContent = data.likes;
  commentsBigPicture.textContent = data.comments.length;
  descriptionBigPicture.textContent = data.description;
  pictureCancel.addEventListener('click', () => bigPicture.classList.add('hidden'));
  const createComment = function () {
    const comment = document.querySelector('.social__comment');
    const clonedElement = comment.cloneNode(true);
    const commentAvatar = clonedElement.querySelector('.social__picture');
    //const altName = clonedElement.querySelector('.');
    const dataObject = data.comments[i];
    //const  = ;
    //const  = ;
    //commentAvatar.src = ;
    commentsPicture.textContent = commmentsObject;
    return clonedElement;
  }

  for (let i = 0; i < data.comments.length; i++) {

  }
};

export {createBigPicture};
