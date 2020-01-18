var avengerNames = require('./avenger-names.json');
var ura = require('unique-random-array');

module.exports = {
  allName: avengerNames,
  randomNames: ura(avengerNames)
};