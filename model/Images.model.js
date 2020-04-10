const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoDatabase = require('../MongoDatabase');

var ImageSchema = new mongoose.Schema(
  {
    path: String,
  },
  { collection: 'images' }
);

var IMAGES = mongoose.model('Image', ImageSchema);

// Populate List with the documents from the Images Collection and set an array with its contents.
var pathToImagesList = [];

var returnImageList = async function getImages() {
  MongoDatabase.openConnection();

  IMAGES.find({}, (error, result) => {
    if (error) {
      console.log('Error: ');
    } else {
      result.forEach((x) => {
        pathToImagesList.push(x.path);
      });
      console.log(pathToImagesList);
    }
  });
};

module.exports = mongoose.model('ImageSchema', ImageSchema);
module.exports.returnImageList = returnImageList;
module.exports.pathToImagesList = pathToImagesList;
