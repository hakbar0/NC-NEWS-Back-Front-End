// test comments upvote
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

it('Able to post a comment, checking by increasing number of comments by 1.', () => {
 return db.ref("/Comments").once('value', commentsCount => {
  }).then(totalCommentsCount => {
    previousTotalComments = Object.entries(totalCommentsCount.val()).length
    return db.ref("/Comments").push({
      createdDate: new Date(Date.now()).toISOString(),
      fullname: 'MrTest',
      id: '-L4erJ5b8NR_cLXz33QQ',
      message: 'please work...'
    }).then(something => {
      return db.ref("/Comments").once('value', commentsCount => {
        let newTotalComments = Object.entries(commentsCount.val()).length
        expect(previousTotalComments + 1).toBe(newTotalComments)
      })
    })
  })
})








