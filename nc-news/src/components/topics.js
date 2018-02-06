import React from 'react';
import '../App.css';
import db from '../firebase';
import { Link } from 'react-router-dom';
class Topics extends React.Component {
  componentDidMount() {
    this.getTopics()
  }
  state = {
    topics: ''
  }
  render() {
    return (
      <div>
        {this.state.topics ?
          <div className='container article-board'>
            {Object.entries(this.state.topics).map(function (topic) {
              return (
                <div className='whole-card'>
                  <Link to={`topics/${topic[1]}`}><div className='card-body body-of-the-card'><h3>{topic[1]}</h3></div></Link>
                </div>
              )
            })}</div>
          :
          <img src = 'https://media.giphy.com/media/52qtwCtj9OLTi/giphy.gif' alt = 'Loading' className='loading'/>}
      </div>
    )
  }
  getTopics = () => {
    db.ref('/Topics').on('value', res => {
      this.setState({
        topics: res.val()
      })
    })
  }
}
//   makeTopics = () => {
//     let topics = ['Football', 'Cooking', 'Coding']
//     topics.map(topic => db.ref("/Topics").push(topic))
//   }
// }

export default Topics;