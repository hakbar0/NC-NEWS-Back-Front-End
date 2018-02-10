import React from 'react';
import db from '../firebase';
import { Link } from 'react-router-dom';
import '../App.css';

class Users extends React.Component {
  componentDidMount() {
    this.getAllUsers();
  }
  state = {
    users: ''
  }

  render() {
    return (
      <div>
        {this.state.users ?
          <div className='container article-board'>
            {Object.entries(this.state.users).reverse().map(function (user) {
              return (
                <div className='whole-card'>
                  <Link to={`/users/${user[1].fullname}`}><div className='card-body body-of-the-card'><h3 className = 'user-card'>{user[1].fullname}</h3></div></Link>
                </div>
              )
            })}</div>
          :
          <img src='https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif' alt='Loading' className='loading' />
        }
      </div>
    )
  }
  getAllUsers = () => {
    db.ref("/Users").on("value", res => {
      this.setState({
        users: res.val()
      })
    });
  };
}

export default Users;