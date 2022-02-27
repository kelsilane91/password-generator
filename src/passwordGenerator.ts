// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html

export const passwordGenerator = (passwordLength: number) => {
  let password = "";
  const keys = Object.keys(functionList);
  for (let i = 0; i < passwordLength; i++) {
    const randomizer = Math.floor(Math.random() * keys.length);
    const name = Object.values(functionList)[randomizer]();
    password += name;
  }
  return password;
};

// 97 - 122
const getRandomLowerLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// 65 - 90
const getRandomUpperLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// hardcoded list for now
const getRandomSymbol = () => {
  const symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  const index = Math.floor(Math.random() * symbolList.length);
  return symbolList[index];
};

// get random number 0 - 9
const getRandomNumber = () => {
  return Math.floor(Math.random() * 9);
};

// object with all available functions
const functionList = {
  lowercase: getRandomLowerLetter,
  uppercase: getRandomUpperLetter,
  symbol: getRandomSymbol,
  number: getRandomNumber,
};
