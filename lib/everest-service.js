var fs = require('fs');
var _ = require('lodash');

var everestDataPath = 'data/everests.json';

loadData = () => {
  fs.readFile(everestDataPath, (err, data) => {
    if (err) {
      console.log('FILE READING FAILED : ', err);
    }
    everests = JSON.parse(data);
    return everests;
  });
};

saveData = (records) => {
  fs.writeFile(everestDataPath, JSON.stringify(records, null, 2), (err) => {
    if (err) {
      console.log('FILE WRITING FAILED : ', writeErr);
    }
  });
};


var getAllEverests = () => {
  return loadData();
};

var getEverestById = (id) => {
  var everests = loadData();
  var everest = _.find(everests, {'id': id});
  return everest;
};

var saveEverest = (everest) => {

};

var updateEverest = (everest) => {

};

module.exports.getAllEverests = getAllEverests;
module.exports.getEverestsById = getEverestById;
module.exports.saveEverest = saveEverest;
module.exports.updateEverest = updateEverest;
