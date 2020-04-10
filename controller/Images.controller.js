const IMAGE_MODEL = require('./../model/Images.model');
const MongoDatabase = require('./../MongoDatabase');

let pathToImages = [];

var imageFiles = function () {
  return new Promise((resolve, reject) => {
    MongoDatabase.openConnection();
    IMAGE_MODEL.find((error, images) => {
      if (error) {
        reject(error);
      } else {
        var result = images.map((x) => {
          return x.path;
        });
        resolve(result);
      }
    });
  });
};

module.exports.imageFiles = imageFiles;
