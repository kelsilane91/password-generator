export const passwordGenerator = () => {
  const lowerCaseLetter = getRandomLowerLetter();
  const upperCaseLetter = getRandomUpperLetter();
  return lowerCaseLetter.concat(upperCaseLetter);
};

const getRandomLowerLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpperLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
