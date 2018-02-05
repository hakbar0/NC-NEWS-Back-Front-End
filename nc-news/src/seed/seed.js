let articles = require('./articleSeed.js')
// import * as ref from '../firebase/refs/eventsRef';

let admin = require('firebase-admin');
const config = require('../config/config')

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://nc-news-90b25.firebaseio.com"
});

let db = admin.database();
let ref = db.ref("/Articles");

articles.map(article => ref.push(article))
