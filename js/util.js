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

const findDuplicates = (arr) => new Set(arr).size !== arr.length;

export {getRandomNumber, getMaxLength, findDuplicates};
