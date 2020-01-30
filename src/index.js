var avengerNames = require('./avenger-names.json');
var ura = require('unique-random-array');

module.exports = {
  all: avengerNames,
  randomNames: ura(avengerNames)
};