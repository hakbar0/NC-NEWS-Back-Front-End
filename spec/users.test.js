// tests for all user features.

db = require('./firebase/firebaseTest');

it('Able to retrieve all users in an object format.', () => {
  return db.ref("/Users").once("value", allUsers => {
    expect(typeof allUsers.val()).toBe('object');
  })
})

it('Expect users to have the keys, createdDate and fullname', () => {
  return db.ref("/Users").once("value", allUsers => {
    let userKeys = Object.keys((Object.values(allUsers.val()))[0]);
    expect(userKeys).toEqual(['createdDate', 'fullname'])
  })
})

it('Expect users to have 2 keys.', () => {
  return db.ref("/Users").once("value", allUsers => {
    let userKeys = Object.keys((Object.values(allUsers.val()))[0]);
    expect(userKeys.length).toBe(2)
  })
})

it('Expect users to have the values of the keys, createdDate and fullname to be a string.', () => {
  return db.ref("/Users").once("value", allUsers => {
    let userValues = Object.values((Object.values(allUsers.val()))[0])
    userValues.map((userVal) => {
      expect(typeof userVal).toBe('string')
    })
  })
})