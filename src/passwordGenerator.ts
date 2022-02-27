// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html

export const passwordGenerator = (passwordLength: number) => {
  let password = "";
  let passArray = [];
  for (let i = 0; i <= passwordLength; i++) {
    let lower = getRandomLowerLetter();
    passArray.push(lower);
  }
  password = passArray.join("");
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
