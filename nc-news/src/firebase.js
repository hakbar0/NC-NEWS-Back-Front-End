// import * as admin from 'firebase-admin';

let admin = require('firebase-admin');
const config = require('./config/config')

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://nc-news-90b25.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/Stories");
ref.push('hello')

ref.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});