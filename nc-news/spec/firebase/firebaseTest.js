let admin = require('firebase-admin');
const config = require('../config/configTest')

admin.initializeApp({
 credential: admin.credential.cert(config),
 databaseURL: "https://nc-news-90b25.firebaseio.com"
});

let db = admin.database();

module.exports = db;