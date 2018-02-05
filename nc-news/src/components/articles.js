import React from 'react';
import db from '../firebase';
import  seedDB from '../seed/seed'
class Articles extends React.Component {

  componentDidMount() {
    this.getAllUsers();
  }
  state = {
    data: ''
  }
  render() {
    return (
      <div>
        <h3 className='loading'>loading....</h3>
        {console.log(this.state)}
      </div>
    )
  }
  getAllUsers = () => {
    db.ref("/Stories").on("value", res => {
      this.setState({
        data: res.val()
      })
    });
  };
}



export default Articles;





