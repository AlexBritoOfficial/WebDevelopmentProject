const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const USER_MODEL = require('./model/User.model');
const IMAGE_MODEL = require('./model/Images.model');
const IMAGE_CONTROLLER = require('./controller/Images.controller');
var exphbs = require('express-handlebars');
const MongoDatabase = require('./MongoDatabase');
const fs = require('fs');
// Set PORT to the processes Global Variables environments setting.
const PORT = process.env.PORT || 4000;

// Register Handlebars View Engine
var hbs = exphbs.create({
  /* config */
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

process.env.NODE_ENV === 'production';

function handle(signal) {
  console.log(`Received ${signal}`);
}
process.on('SIGTERM', handle);

//Use Body Parser to parse through JSON
app.use(bodyParser.urlencoded({ extended: true }));

//Path to Images Array

/****
 * HTTP GET REQUESTS
 */
app.use(function (req, res, next) {
  next();
});
app.use('/', router);
app.use('/', express.static(path.join(__dirname, 'public')));

/***This router gets the Homepage.*/
router.get('/', (request, response) => {
  response.render('mainDynamic', {
    showUserInfo: true,
    layout: 'main',
  });
});

// router.get('/users', (request, response) => {
//   USER_MODEL.find({}).exec(function (error, useraccounts) {
//     if (error) {
//       console.log('There was an errror');
//     } else {
//       console.log('Line 29:');
//       response.json(useraccounts);
//       console.log(useraccounts);
//     }
//   });
// });

/**This router get About Us page*/
router.get('/aboutTeam', (request, response) => {
  response.render('aboutUsDynamic', {
    showUserInfo: true,
    layout: 'main',
  });
});

/** This router gets the log in.*/
router.get('/createaccount', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'createAccount.html'));
});

/*** Router for posting new user account to the database. */
router.post('/succesfulAccountCreated', (request, response) => {
  MongoDatabase.openConnection();
  var newUserAccount = new USER_MODEL();
  var client_email = request.body.email;
  var client_username = request.body.username;
  var client_password = request.body.password;

  newUserAccount.email = client_email;
  newUserAccount.username = client_username;
  newUserAccount.password = client_password;
  newUserAccount.save((error, user) => {
    if (error) {
      console.log('Line 84: ' + error);
      response.sendFile(__dirname, 'public', '404.html');
    } else {
      response.render('successfullAccount', {
        showUserInfo: true,
        layout: 'main',

        helpers: {
          username: function () {
            return client_username;
          },
          email: function () {
            return client_email;
          },
        },
      });
      console.log('User Inserted into Database. ');
      console.log(user);
    }
  });
});

/***This function will reutrn one user account.*/
app.post('/users/:name', (request, response) => {
  MongoDatabase.openConnection();
  USER_MODEL.findOne({
    username: request.params.name,
  }).exec((error, user) => {
    if (error) {
      response.sendFile(__dirname, 'public', '404.html');
    } else {
      response.json(user);
    }
  });
});

let images = [];
router.get('/galleryImages', (request, response) => {
  var myPromise = IMAGE_CONTROLLER.imageFiles();
  myPromise
    .then((res) => {
      // console.log(res);
      images = res;
      console.log(images);
      response.render('images', {
        images: images,
        layout: 'main',
      });
    })
    .catch((rej) => {
      console.log('Error: ' + rej);
    });
});

app.locals.showOptions = false;
router.post('/logInDynamic', (request, response, next) => {
  MongoDatabase.openConnection();
  USER_MODEL.findOne({
    email: request.body.email,
    password: request.body.password,
  }).exec((error, user) => {
    if (error) {
      response.redirect('/loginPage');
    } else {
      app.locals.showOptions = true;
      app.locals.USERNAME = user.username;
      response.redirect('/loginPage');
    }
  });
});

/***This router gets the Homepage. Once user signs out*/
router.get('/signOut', (request, response) => {
  if (app.locals.showOptions) {
    app.locals.showOptions = false;
  }
  response.render('mainDynamic', {
    showUserInfo: true,
    layout: 'main',
  });
});

router.get('/loginPage', (request, response) => {
  response.render('logInDynamic', {
    showUserInfo: true,
    layout: 'login',
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// // Relative Path to image directory
// const imageRelativeFolderPath = 'public/img/';

// // Read Images from public/img directory
// fs.readdir(imageRelativeFolderPath, (error, data) => {
//   if (error) {
//     console.log('Error: Line 119' + error);
//   } else console.log(data);
//   for (var i = 0; i < data.length; i++) {
//     var imagefile = data[i].toString();
//     // console.log(path.join('/', 'img', imagefile));
//     path[i] = path.join('/', 'img', imagefile);
//     // console.log(path[i]);
//   }

//   pathToImages = data.map(x => `img/${x}`);
//   docs = pathToImages.map(x => {
//     return { path: x };
//   });
//   populateDataBaseImages(docs);
// });

// function populateDataBaseImages(docs) {
//   MongoDatabase.openConnection();

//   IMAGE_MODEL.insertMany(docs, (error, result) => {
//     console.log('Line 163:' + docs);
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Line 166' + result);
//     }
//   });
// }
