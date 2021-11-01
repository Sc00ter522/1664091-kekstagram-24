import {getRandomNumber, getMaxLength} from './util.js';

const description = [
  'Люблю фотографировать всё вокруг и получать от этого одно только удовольствие',
  'Думаю, что фотография вышла забавной',
  'Животные - самые фотогеничные существа на земле',
  'Фотографии под солнцем - самые яркие, только посмотри',
  'Прекрасное время года, чтобы любоваться такими фотографиями',
];

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const name = [
  'Артём',
  'Игорь',
  'Андрей',
  'Катя',
  'Кирилл',
  'Александра',
  'Мария',
  'Павел',
  'Леонид',
];

const genArray = [];
for (let i = 0; i < 25; i++) {
  const comments = [];
  for(let i = 0; i < 3; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: message[getRandomNumber(0, message.length - 1)],
      name: name[getRandomNumber(0, message.length - 1)],
    });
  }
  genArray.push({
    id: i,
    url: `photos/${i + 1}.jpg`,
    description: description[getRandomNumber(0, description.length - 1)],
    likes: getRandomNumber(15, 100),
    comments: comments,
  });
}

export {genArray};
