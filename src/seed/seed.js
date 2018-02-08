import db from '../firebase';
import articles from './articleSeed.js';
import config from '../config/config';

const seedDB = () => {
articles.map(article =>  db.ref("/Stories").push(article));
}

export default seedDB;
