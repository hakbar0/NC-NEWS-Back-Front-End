import React from 'react';
import '../App.css';
import db from '../firebase';

class Article extends React.Component {
  componentDidMount() {
    this.getArticle();
    this.getComments()
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
            <div class="card">
              <img class="card-img-top news" src={`${this.state.article.imageUrl}`} alt="Card image cap" />
              <div class="card-block article-text">
                <h1 className='article-title'>{this.state.article.title}</h1>
                <h3 className='article-body'>{this.state.article.body}</h3>
                <h3 className='article-author'>Author: {this.state.article.author}</h3>
                <h3 className='article-belongs'>Category: {this.state.article.category}</h3>
                <h3 className='article-votes'>Votes: {this.state.article.votes}</h3>
                <button type="button" class="btn btn-success" onClick={this.upVote}>Upvote</button>
                <button type="button" class="btn btn-danger" onClick={this.downVote}>Downvote</button>

                {this.state.comments && Object.entries(this.state.comments).map(function (comment) {
                  return (
                    <div className='whole-card'>
                      {console.log(comment)}
                      <div className='card-body body-of-the-card'><h3 className='article-title'>Name: {comment[1].fullname}</h3>
                        <h4>Comment: {comment[1].message}</h4>
                        <h4>Created Date: {comment[1].createdDate}</h4>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            :
            <h3 className='loading'>loading....</h3>}
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
}
export default Article;
