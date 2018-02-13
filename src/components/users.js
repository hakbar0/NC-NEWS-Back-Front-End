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
          <div className='container article-board user-board'>
            <header><p>Note: By clicking on the user, you will be navigated to all the articles that user has posted.</p></header>
            {Object.entries(this.state.users).reverse().map(function (user) {
              return (
                <div className=''>
                  <Link to={`/users/${user[1].fullname}`}><div className='body-of-the-user-card'><h3>{user[1].fullname}</h3></div></Link>
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