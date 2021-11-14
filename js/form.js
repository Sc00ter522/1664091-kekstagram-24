import {getMaxLength, findDuplicates} from './util.js';

const MAX_LENGTH = 140;
const MAX_HASHTAGS = 5;

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

form.addEventListener('change', onOpenImgLoad);

const onCloseImgLoad = function () {
  form.removeEventListener('change', onOpenImgLoad);
  formCancel.removeEventListener('click', onCloseImgLoad);
  formOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  inputFile.value = '';
};

formCancel.addEventListener('click', onCloseImgLoad);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && evt.target.tagName !== 'INPUT' &&  evt.target.tagName !== 'TEXTAREA') {
    onCloseImgLoad();
  }
});

const validateText = function (evt) {
  if (getMaxLength(textDescription.value, MAX_LENGTH)) {
    textDescription.setCustomValidity('');
    textDescription.reportValidity();
  } else {
    evt.preventDefault();
    textDescription.setCustomValidity('Длина комментария не может составлять больше 140 символов');
    textDescription.reportValidity();
  }
};

const validateHashtags = function (evt) {
  const inputHashtags = textHashtags.value.split(' ');
  for (let j = 0; j < inputHashtags.length; j++) {
    inputHashtags[j] = inputHashtags[j].toLowerCase();
  }
  const arrayIsValid = !findDuplicates(inputHashtags);
  const lengthHashtagsisValid = inputHashtags.length <= MAX_HASHTAGS;
  if (!arrayIsValid || !lengthHashtagsisValid) {
    evt.preventDefault();
    textHashtags.setCustomValidity('Не должно быть дубликатов и не больше 5 хэштегов');
    textHashtags.reportValidity();
  } else {
    textHashtags.setCustomValidity('');
    textHashtags.reportValidity();
    for (let i = 0; i < inputHashtags.length; i++) {
      const inputHashtag = inputHashtags[i];
      const hashtagsPattern = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
      const isValid = hashtagsPattern.test(inputHashtag);
      if (!isValid) {
        evt.preventDefault();
        textHashtags.setCustomValidity('Неверно указан хэштег');
        textHashtags.reportValidity();
      } else {
        textHashtags.setCustomValidity('');
        textHashtags.reportValidity();
      }
    }
  }
};

textDescription.addEventListener('input', (evt) => {
  validateText(evt);
});

textHashtags.addEventListener('input', (evt) => {
  validateHashtags(evt);
});

form.addEventListener('submit', (evt) => {
  validateHashtags(evt);
  validateText(evt);
});
