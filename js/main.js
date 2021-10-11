function getRandomNumber(min, max) {
  if (min < 0 || max < 0) {
    return false;
  }
  if (min < max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  } else {
    return Math.floor(Math.random() * (min - max + 1) ) + max;
  }
}
getRandomNumber();

function getMaxLength(string, maxLength) {
  if (string.length < maxLength) {
    return true;
  } else {
    return false;
  }
}
let description = [
  'Люблю фотографировать всё вокруг и получать от этого одно только удовольствие',
  'Думаю, что фотография вышла забавной',
  'Животные - самые фотогеничные существа на земле',
  'Фотографии под солнцем - самые яркие, только посмотри',
  'Прекрасное время года, чтобы любоваться такими фотографиями',
];

let message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

let name = [
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

let genObject = [];
for (let i = 0; i < 25; i++) {
  let comments = [];
  for(let i = 0; i < 3; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: message[getRandomNumber(0, message.length - 1)],
      name: name[getRandomNumber(0, message.length - 1)],
    });
  }
  genObject.push({
    id: i,
    url: `photos/${i + 1}.jpg`,
    description: description[getRandomNumber(0, description.length - 1)],
    likes: getRandomNumber(15, 100),
    comments: comments,
  });
}
