var diacriticsMap = [
  {character: '^', code: 94},
  {character: '`', code: 96},
  {character: '~', code: 126},
  {character: '¨', code: 168},
  {character: '´', code: 180}
];

var charCodeList = diacriticsMap.map(function (val) {
  return val.code;
});

var charList = diacriticsMap.map(function (val) {
  return val.character;
});

function isDiacriticCode(val){
  return charCodeList.indexOf(val.charCodeAt(val)) > -1;
}

function isDiacriticCharacter(val){
  return charList.indexOf(val.charCodeAt(val)) > -1;
}

module.exports.isDiacriticCode = isDiacriticCode;
module.exports.isDiacriticCharacter = isDiacriticCharacter;
