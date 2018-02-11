// tests for all topics features.

db = require('./firebase/firebaseTest');


it('Able to retrieve all articles in an object format.', () => {
  return db.ref("/Topics").once("value", allTopics => { expect(typeof allTopics.val()).toBe('object'); })
})

it('Expect to only have 3 topics.', () => {
  return db.ref("/Topics").once("value", allTopics => {
    let topicsKeys = Object.values(allTopics.val()).length;
    expect(topicsKeys).toBe(3)
  })
})

it('Expect the three topics to be, football, cooking, coding.', () => {
  return db.ref("/Topics").once("value", allTopics => {
    let topicsKeys = Object.values(allTopics.val());
    topicsKeys.map((topic, i) => {
      if (i === 0) expect(topic).toBe('Football');
      else if (i === 1) expect(topic).toBe('Cooking')
      else if (i === 2) expect(topic).toBe('Coding')
    })
  })
})
