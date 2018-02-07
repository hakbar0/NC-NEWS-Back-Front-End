import React from 'react';
import '../App.css';
import db from '../firebase';

class Article extends React.Component {
  componentDidMount() {
    this.getArticle();
    this.getComments();
  }
  state = {
    article: '',
    comments: ''
  }

  render() {
    return (
      <div class='container'>
        <header>
          {this.state.article ?
            <div>

              <div class="card">
                <img class="card-img-top news" src={`${this.state.article.imageUrl}`} alt="Card image cap" />
                <div class="card-block article-text">
                  <h1 className='article-title'>{this.state.article.title}</h1>
                  <h3 className='article-body'>{this.state.article.body}</h3>
                </div>
              </div>
              <div class="card extra-details">
                <h3 className='article-author'>Author: {this.state.article.author}</h3>
                <h3 className='article-category'>Category: {this.state.article.category}</h3>
                <h3 className='article-votes'>Votes: {this.state.article.votes}</h3>
                <button type="button" class="btn btn-success upvote" onClick={this.upVote}>Upvote</button>
                <button type="button" class="btn btn-danger downvote" onClick={this.downVote}>Downvote</button>
              </div>

              <div class="card comments-form">

                <form>
                  <div className='form-group'>
                    <h2 className='comment-title'>Post a comment</h2>
                    <label for="form-name"><h5 className='form-name'>Author</h5></label>
                    <input type="text" className="form-control" id="form-name" placeholder="Example: Lee Morris......" />
                    <label for="form-message"><h5 className='form-message'>Message</h5></label>
                    <input type="text" className="form-control form-message" id="form-message" placeholder="Example: Why did Lee's fish die? The water LEEked...." />
                    <input class="btn btn-primary submit" type="button" value="Submit" onClick={this.postComment} />
                  </div>
                </form>
              </div>
              {this.state.comments && Object.entries(this.state.comments).reverse().map((comment) => (
                <div class="card comments-card">
                  <div className='whole-card'>
                    <div className='card-body comments-body' delete={comment[1].message}><h3 className='article-title'>Author: {comment[1].fullname}</h3>
                      <h4>Comment: {comment[1].message}</h4>
                      <h4>Created Date: {comment[1].createdDate}</h4>
                      <button type="button" class="btn btn-danger downvote" onClick={this.deleteComment.bind(null, comment[0])}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}

            </div>
            :
            <img src='https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif' alt='Loading' className='loading' />}
        </header>
      </div>
    )
  }

  getArticle = () => {
    db.ref(`/Stories/${this.props.match.params.id}`).on("value", res => {
      this.setState({
        article: res.val()
      })
    });
  }
  upVote = () => {
    let currentvote = this.state.article.votes;
    db.ref(`/Stories/${this.props.match.params.id}`).update({ votes: currentvote + 1 });
  }
  downVote = () => {
    let currentvote = this.state.article.votes;
    db.ref(`/Stories/${this.props.match.params.id}`).update({ votes: currentvote - 1 });
  }
  getComments = () => {
    db.ref("/Comments").orderByChild('id').equalTo(`${this.props.match.params.id}`).on('value', res => {
      this.setState({
        comments: res.val()
      })
    });
  }
  postComment = () => {
    let username = ''
    db.ref('/Users').orderByChild('fullname').equalTo(document.getElementById('form-name').value).once('value', res => {
      if (!res.val()) {
        db.ref("/Users").push({
          createdDate: new Date(Date.now()).toISOString(),
          fullname: document.getElementById('form-name').value,
        })
      }
    })

    db.ref("/Comments").push({
      createdDate: new Date(Date.now()).toISOString(),
      fullname: document.getElementById('form-name').value,
      id: this.props.match.params.id,
      message: document.getElementById('form-message').value
    });
  }

  deleteComment = (id) => {
    db.ref(`/Comments/${id}`).once('value', res => {
      if(res.val().fullname === 'northcoder') db.ref(`/Comments/${id}`).remove();
      else if (res.val().fullname !== 'northcoder') alert('You cannot delete this comment!!');
    })
  }
}
export default Article;
