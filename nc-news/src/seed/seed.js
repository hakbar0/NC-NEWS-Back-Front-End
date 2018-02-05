import { ref } from '../firebase';
import articles from './articleSeed.js';
import config from '../config/config';

articles.map(article => ref.push(article));
