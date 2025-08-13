// decoration.js
function applyDecoration(text, category) {
  const map = decorStorage[category];
  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

// كم تحتوي من الرموز
function getDecoratorInfo(category) {
  const sizes = {
    arabic: Object.keys(decorStorage.arabic).length,
    arabic1: Object.keys(decorStorage.arabic1).length,
    arabic2: Object.keys(decorStorage.arabic2).length,
    arabic3: Object.keys(decorStorage.arabic3).length,
    arabic4: Object.keys(decorStorage.arabic4).length,
    arabic5: Object.keys(decorStorage.arabic5).length,
    arabic6: Object.keys(decorStorage.arabic6).length,
    arabic7: Object.keys(decorStorage.arabic7).length,
    arabic8: Object.keys(decorStorage.arabic8).length,
    arabic9: Object.keys(decorStorage.arabic9).length,
    arabic10: Object.keys(decorStorage.arabic10).length,
    arabic11: Object.keys(decorStorage.arabic11).length,
    arabic12: Object.keys(decorStorage.arabic12).length,
    english: Object.keys(decorStorage.english).length,
    english1: Object.keys(decorStorage.english1).length,
    english2: Object.keys(decorStorage.english2).length,
    english3: Object.keys(decorStorage.english3).length,
    english4: Object.keys(decorStorage.english4).length,
    english5: Object.keys(decorStorage.english5).length,
    english6: Object.keys(decorStorage.english6).length,
    english7: Object.keys(decorStorage.english7).length,
    english8: Object.keys(decorStorage.english8).length,
    english9: Object.keys(decorStorage.english9).length,
    english10: Object.keys(decorStorage.english10).length,
    english11: Object.keys(decorStorage.english11).length,
    english12: Object.keys(decorStorage.english12).length,
    english13: Object.keys(decorStorage.english13).length,
    english14: Object.keys(decorStorage.english14).length,
    english15: Object.keys(decorStorage.english15).length,
    english16: Object.keys(decorStorage.english16).length,
    english17: Object.keys(decorStorage.english17).length,
    english18: Object.keys(decorStorage.english18).length,
    english19: Object.keys(decorStorage.english19).length,
    english20: Object.keys(decorStorage.english20).length,
    english21: Object.keys(decorStorage.english21).length,
    special: Object.keys(decorStorage.special).length,
    all: Object.keys(decorStorage.all).length,
  };
  return `تحتوي على ${sizes[category]} رمز زخرفي`;
}
