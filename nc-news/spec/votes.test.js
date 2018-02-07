// test comments upvote
db = require('./firebase/firebaseTest');

it('updates vote count in comment', () => {
  return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).once("value", res => {
  }).then(number => {
    previousVote = number.val().votes;
    return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).update({ votes: previousVote + 1 })
  }).then(somthing => {
    console.log(previousVote)
    return db.ref(`/Stories/-L4erJ5eJo56Bvs5BsjK`).once("value", currentVote => {
      expect(previousVote + 1).toBe(currentVote.val().votes);
    })
  })
})






