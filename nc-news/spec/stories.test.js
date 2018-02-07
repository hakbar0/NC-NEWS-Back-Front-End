// tests for all story features.

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

