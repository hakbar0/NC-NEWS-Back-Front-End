import React from 'react';
import '../App.css';
import db from '../firebase';

class Article extends React.Component {
  componentDidMount() {
    this.getArticle();
  }
  state = {
    article: ''
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
              </div>
            </div>
            :
            <h3 className ='loading'>loading....</h3>}
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
}
export default Article;