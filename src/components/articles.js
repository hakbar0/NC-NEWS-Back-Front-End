import React from 'react';
import db from '../firebase';
import { Link } from 'react-router-dom';
import seedDB from '../seed/seed'
import RandomCommentGenerator from '../seed/CommentsSeed'
import '../App.css';
class Articles extends React.Component {

  componentDidMount() {
    this.getAllArticles();
  }
  state = {
    articles: ''
  }
  render() {
    return (
      <div>
        {this.state.articles ?
          <div className='container article-board'>
            {Object.entries(this.state.articles).reverse().map(function (article) {
              return (
                <div className='whole-card'>
                  <div className='card' style={{ width: '20rem' }}>
                    <img src={`${article[1].imageUrl}`} className = 'article-image' alt="Some image" />
                    <Link to={`article/${article[0]}`}><div className='card-body body-of-the-card'><h3 className='article-title'>{article[1].title}</h3></div></Link>
                  </div>
                </div>
              )
            })}</div>
          :
          <img src = 'https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif' alt = 'Loading' className='loading'/>
        }
      </div>
    )
  }
  getAllArticles = () => {
    db.ref("/Stories").on("value", res => {
      this.setState({
        articles: res.val()
      })
    });
  };
}



export default Articles;







