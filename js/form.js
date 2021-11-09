import {getRandomNumber, getMaxLength} from './util.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const formOverlay = form.querySelector('.img-upload__overlay');
const formCancel = form.querySelector('.img-upload__cancel');
const inputFile = form.querySelector('#upload-file');
const textHashtags = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const onOpenImgLoad = function () {
  formOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

form.addEventListener('change', () => onOpenImgLoad());

const onCloseImgLoad = function () {
  formOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  inputFile.value = '';
};

formCancel.addEventListener('click', () => onCloseImgLoad());
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    onCloseImgLoad();
  }
});

form.addEventListener('submit', (evt) => {
  const inputHashtags = textHashtags.value;
  const hashtagsPattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const isValid = hashtagsPattern.test(inputHashtags);
  if (!isValid) {
    evt.preventDefault();
    textHashtags.setCustomValidity('Неверно указан хэштег');
    textHashtags.reportValidity();
  } else {
    textHashtags.setCustomValidity('');
  }
});
