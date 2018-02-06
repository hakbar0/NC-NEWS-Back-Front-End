import React from 'react';
import '../App.css';
import db from '../firebase';
import { Link } from 'react-router-dom';
class Topic extends React.Component {
  componentDidMount() {
    this.getArticlesByTopics();
  }
  state = {
    articlesByTopic: ''
  }
  render() {
    return (
      <div>
        {this.state.articlesByTopic ?
          <div className='container article-board'>
            {Object.entries(this.state.articlesByTopic).map(function (article) {
              return (
                <div className='whole-card'>
                  <div className='card' style={{ width: '20rem' }}>
                    <img src={`${article[1].imageUrl}`} alt="Some image" />
                    <Link to={`/article/${article[0]}`}><div className='card-body body-of-the-card'><h3 className='article-title'>{article[1].title}</h3></div></Link>
                  </div>
                </div>
              )
            })}</div>
          :
          <h3 className='loading'>loading....</h3>}
      </div>
    )
  }
  getArticlesByTopics = () => {
    db.ref("/Stories").orderByChild('category').equalTo(`${this.props.match.params.topic}`).on('value', res => {
      this.setState({
        articlesByTopic: res.val()
      })
    })
  }
}

export default Topic;