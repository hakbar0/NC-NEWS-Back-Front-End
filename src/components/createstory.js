import React from 'react';
import '../App.css';
import db from '../firebase';
import { BrowserRouter, Route, NavLink, Switch, Link, Redirect } from 'react-router-dom';

class CreateStory extends React.Component {
  state = {
    redirect: false
  }
  render() {
    return (
      <div className='container'>
        <form>
          <div className='form-group'>
            <h2 className='story-title'>Post a story</h2>
            <label for="form-title"><h5 className="form-title">Title</h5></label>
            <input type="text" className="form-control" id="form-title" placeholder="Example: Women found alive, but is the man dead????" required />
            <label for="form-name"><h5 className='form-name'>Author</h5></label>
            <input type="text" className="form-control" id="form-name" placeholder="Example: Lee Morris......" />
            <label for="form-message"><h5 className='form-message'>Message</h5></label>
            <input type="text" className="form-control form-message" id="form-message" placeholder="Example: Why did Lee's fish die? The water LEEked...." />
            <label for="form-category"><h5 className = 'form-category'>Choose category:</h5></label>
            <select class="form-control" id="form-category">
              <option>Football</option>
              <option>Cooking</option>
              <option>Coding</option>
            </select>
            <label for="form-image"><h5 className="form-image">Image Url</h5></label>
            <input type="text" className="form-control" id="form-image" placeholder="Example: https://www.drone-world.com/media/catalog/product/cache/1/image/730x487/9df78eab33525d08d6e5fb8d27136e95/p/h/phantom_3_advanced.jpg" />
            <input class="btn btn-primary submit" type="button" value="Submit" onClick={this.postStory} />
          </div>
        </form>
        {this.state.redirect ? <Redirect push to="/" /> : console.log('nothing')}
      </div>
    )
  }
  postStory = () => {
    let username = ''
    db.ref('/Users').orderByChild('fullname').equalTo(document.getElementById('form-name').value).once('value', res => {
      if (!res.val()) {
        db.ref("/Users").push({
          createdDate: new Date(Date.now()).toISOString(),
          fullname: document.getElementById('form-name').value,
        })
      }
      db.ref('/Stories').push({
        author: document.getElementById('form-name').value,
        body: document.getElementById('form-message').value,
        category: document.getElementById('form-category').value,
        imageUrl: document.getElementById('form-image').value,
        title: document.getElementById('form-title').value,
        votes: 0
      })
      this.setState({
        redirect: true
      })
    })
  }
}

export default CreateStory;