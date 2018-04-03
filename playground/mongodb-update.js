// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ac3b83b28965d2554c7c5e4')
  }, {
    $set: {
      name: 'Peter'
    },
    $inc: {
      age: 1
    },
  }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });
  // db.close();
});