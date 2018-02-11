// tests for all comment features.

db = require('./firebase/firebaseTest');

it('Able to retrieve all comments in an object format.', () => {
  db.ref("/Comments").once("value", allComments => {
    expect(typeof allComments.val()).toBe('object');
  })
})

it('Expect comments to have the keys, createdDate,fullname, id, message.', () => {
  db.ref("/Comments").once("value", allComments => {
    let commentKeys = Object.keys((Object.values(allComments.val()))[0]);
    expect(commentKeys).toEqual(['createdDate', 'fullname', 'id', 'message'])
  })
})

it('Expect comments to have 4 keys.', () => {
  db.ref("/Comments").once("value", allComments => {
    let commentKeys = Object.keys((Object.values(allComments.val()))[0]);
    expect(commentKeys.length).toBe(4)
  })
})

it('Expect the values of createdDate, fullname, id and message to be a string.', () => {
  db.ref("/Comments").once("value", allComments => {
    let commentValues = Object.values((Object.values(allComments.val()))[0])
    commentValues.map((commentValue) => { expect(typeof commentValue).toBe('string') })
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
      expect(previousTotalComments - 1).toBe(newTotalComments)
    })
  })
})

