// import * as admin from 'firebase-admin';

let admin = require('firebase-admin');
const config = require('./config/config')

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://nc-news-90b25.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/Stories");


module.exports = { ref };