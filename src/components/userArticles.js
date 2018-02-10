import React from 'react';
import db from '../firebase';
import { Link } from 'react-router-dom';
import '../App.css';

class UserArticles extends React.Component {
  componentDidMount() {
    this.getUserArticles();
  }
  state = {
    article: ''
  }

  render() {
    return (
      <div>
        {this.state.article ?
          <div className='container article-board'>
            {Object.entries(this.state.article).reverse().map(function (article) {
              return (
                <div className='whole-card'>
                  <div className='card' style={{ width: '20rem' }}>
                    <img src={`${article[1].imageUrl}`} className = 'article-image' alt="Article" />
                    <Link to={`/article/${article[0]}`}><div className='card-body body-of-the-card'><h3 className='article-title'>{article[1].title}</h3></div></Link>
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
  
  getUserArticles = () => {
    db.ref("/Stories").orderByChild('author').equalTo(`${this.props.match.params.name}`).on('value', res => {
      this.setState({
        article: res.val()
      })
    })
  }
}

export default UserArticles;