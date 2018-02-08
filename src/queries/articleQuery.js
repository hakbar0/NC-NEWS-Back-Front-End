import React from 'react';
import db from '../firebase';

const getAllStories = () => {
  db.ref("/Stories").on("value", res => {
    console.log(res.val())
    this.setState({
      data: res.val()
    })
  });
};

export default getAllStories;