// tests for all article features.

db = require('./firebase/firebaseTest');

it('Able to retrieve all articles in an object format.', () => {
  db.ref("/Stories").once("value", allArticles => {
    expect(typeof allArticles.val()).toBe('object');
  })
})

it('Expect articles to have the keys, author, body, category, imageUrl, title and votes.', () => {
  db.ref("/Stories").once("value", allArticles => {
    let articleKeys = Object.keys((Object.values(allArticles.val()))[0]);
    expect(articleKeys).toEqual(['author', 'body', 'category', 'imageUrl', 'title', 'votes'])
  })
})

it('Expect articles to have the keys of a length of 6.', () => {
  db.ref("/Stories").once("value", allArticles => {
    let articleKeys = Object.keys((Object.values(allArticles.val()))[0]);
    expect(articleKeys.length).toBe(6)
  })
})

it('Expect articles to have the values, author, body, category, imageUrl, and title to be a string, but votes to be a number.', () => {
  db.ref("/Stories").once("value", allArticles => {
    let articleValues = Object.values((Object.values(allArticles.val()))[0])
    articleValues.map((article, i) => {
      if (i !== 5) expect(typeof article).toBe('string')
      else expect(typeof article).toBe('number')
    })
  })
})

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

