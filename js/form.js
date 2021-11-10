import {getRandomNumber, getMaxLength, findDuplicates} from './util.js';

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
  if (evt.key === 'Escape' && evt.target.tagName !== 'INPUT' &&  evt.target.tagName !== 'TEXTAREA') {
    onCloseImgLoad();
  }
});

const validateHashtags = function (evt) {
  const inputHashtags = textHashtags.value.split(' ');
  //console.log(inputHashtags);
  //Привести в нижний регистр с помощью цикла;
  //перезаписывать массив;
  const arrayIsValid = !findDuplicates(inputHashtags);
  //console.log(arrayIsValid);
  if (!arrayIsValid) {
    evt.preventDefault();
    textHashtags.setCustomValidity('Не должно быть дубликатов');
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

textHashtags.addEventListener('change', (evt) => {
  validateHashtags(evt);
});

form.addEventListener('submit', (evt) => {
  validateHashtags(evt);
});
