import React from 'react';
import * as firebase from "firebase";
import config from '../config/config';

firebase.initializeApp({
  apiKey: "AIzaSyBMIPjdaZDEoMpw6npYI06qSm7rtO65v7I",
  authDomain: "nc-news-90b25.firebaseapp.com",
  databaseURL: "https://nc-news-90b25.firebaseio.com",
  projectId: "nc-news-90b25",
  storageBucket: "nc-news-90b25.appspot.com",
  messagingSenderId: "254810947718"
})
const db = firebase.database();
let ref = db.ref("/Stories");

class Articles extends React.Component {

  componentDidMount() {
    this.getAllUsers();
  }

  state = {
    data: ''
  }

  getAllUsers = () => {
    db.ref("/Stories").on("value", res => {
      this.setState({
        data: res.val()
      })
    });
  };


  render() {
    return (
      <div>
        <h3 className='loading'>loading....</h3>
        {console.log(this.state)}
      </div>
    )
  }
}



export default Articles;





