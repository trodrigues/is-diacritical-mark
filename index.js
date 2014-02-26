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

function fromCode(val){
  return val && charCodeList.indexOf(val) > -1;
}

function fromChar(val){
  return val && charCodeList.indexOf(val.charCodeAt(0)) > -1;
}

module.exports.fromCode = fromCode;
module.exports.fromChar = fromChar;
