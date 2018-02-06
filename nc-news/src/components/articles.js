import React from 'react';
import db from '../firebase';
import { Link } from 'react-router-dom';
import seedDB from '../seed/seed'
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
          <div class='container article-board'>
            {Object.entries(this.state.articles).map(function (article) {
              return (
                <div class='whole-card'>
                  <div class='card' style={{ width: '20rem' }}>
                    {console.log(article[1].imageUrl)}
                    <img src={`${article[1].imageUrl}`} alt="Some image" />
                    <Link to={`article/${article[0]}`}><div class='card-body body-of-the-card'><h3 className='article-title'>{article[1].title}</h3></div></Link>
                  </div>
                </div>
              )
            })}</div>
          :
          <h3 className='loading'>loading....</h3>}
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







