import admin from 'firebase-admin';
import config from './config/config';

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://nc-news-90b25.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/Stories");

ref.on("value", function (snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});


export default ref;