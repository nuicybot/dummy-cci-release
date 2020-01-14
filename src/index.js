var avengerNames = require('./avenger-names.json');
var ura = require('unique-random-array');

module.exports = {
  allNames: avengerNames,
  random: ura(avengerNames)
};