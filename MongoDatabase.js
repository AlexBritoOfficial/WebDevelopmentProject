const mongoose = require('mongoose');

var openConnection = async function openConnection() {
  const database = 'mongodb://localhost/test_database';
  try {
    await mongoose.connect(database, { useNewUrlParser: true });
    console.log('Successfully Connected to Database!');
    return true;
  } catch (error) {
    console.log('Connection Error: ' + error);
    return false;
  }
};

exports.openConnection = openConnection;
