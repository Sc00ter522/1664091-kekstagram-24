import {genArray} from './data.js';

const setDataToHtml = function (i) {
  const picture = document.querySelector('#picture').content;
  const clonedElement = picture.cloneNode(true);
  const urlPicture = clonedElement.querySelector('.picture__img');
  const commentsPicture = clonedElement.querySelector('.picture__comments');
  const likesPicture = clonedElement.querySelector('.picture__likes');
  const dataObject = genArray[i];
  const urlObject = dataObject.url;
  const commmentsObject = dataObject.commments;
  const likesObject = dataObject.likes;
  urlPicture.src = urlObject;
  commentsPicture.textContent = commmentsObject;
  likesPicture.textContent = likesObject;
  return clonedElement;
};

for (let i = 0; i < genArray.length; i++) {
  const pictures = document.querySelector('.pictures');
  const newPicture = setDataToHtml(i);
  pictures.appendChild(newPicture);
}

