// tests for all comments features!!

db = require('./firebase/firebaseTest');

it('updates vote count in comment for an upvote.', () => {
  return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).once("value", res => {
  }).then(number => {
    previousVote = number.val().votes;
    return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).update({ votes: previousVote + 1 })
  }).then(somthing => {
    return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).once("value", currentVote => {
      expect(previousVote + 1).toBe(currentVote.val().votes);
    })
  })
})

it('updates vote count in comment for a downvote.', () => {
  return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).once("value", res => {
  }).then(number => {
    previousVote = number.val().votes;
    return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).update({ votes: previousVote - 1 })
  }).then(somthing => {
    return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).once("value", currentVote => {
      expect(previousVote - 1).toBe(currentVote.val().votes);
    })
  })
})

it('Able to post a comment.', () => {
  return db.ref("/Comments").once('value', commentsCount => {
  }).then(totalCommentsCount => {
    previousTotalComments = Object.entries(totalCommentsCount.val()).length
    return db.ref("/Comments").push({
      createdDate: new Date(Date.now()).toISOString(),
      fullname: 'MrTest',
      id: '-L4erJ5b8NR_cLXz33QQ3',
      message: 'please work...'
    }).then(something => {
      return db.ref("/Comments").once('value', commentsCount => {
        let newTotalComments = Object.entries(commentsCount.val()).length
        expect(previousTotalComments + 1).toBe(newTotalComments)
      })
    })
  })
})

it('Able to delete a comment.', () => {
  return db.ref("/Comments").once('value', commentsCount => {
  }).then(totalCommentsCount => {
    previousTotalComments = Object.entries(totalCommentsCount.val()).length
    return db.ref(`/Comments`).orderByChild('id').equalTo('-L4erJ5b8NR_cLXz33QQ3').once('value', findComment => {
    }).then(findCommentId => {
      return db.ref(`/Comments/${Object.keys(findCommentId.val())[0]}`).remove()
    })
  }).then(something => {
    return db.ref("/Comments").once('value', commentsCount => {
      let newTotalComments = Object.entries(commentsCount.val()).length
      expect(previousTotalComments -1).toBe(newTotalComments)
    })
  })
})







