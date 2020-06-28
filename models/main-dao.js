const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://3.22.233.244:27017';
const app = require('../app');


function CRUD(operation) {
    MongoClient(url, { useUnifiedTopology: true }).connect((err, client) => {
        const mains = client.db('lesson').collection('main');
        operation(mains, client);
    });
}



exports.findAll = callback => {
    CRUD((main, client) => {
        main.find({}, (err, result) => {
            result.toArray()
                .then(result => callback(result))
                .catch(err => console.log(err))
                .finally(() => client.close());
        });
    });
}

exports.delete = (id, callback) => {
    CRUD((main, client) => {
        main.deleteOne({ _id: id })
            .then(result => callback(result.deletedCount))
            .catch(err => console.log(err))
            .finally(() => client.close());
    });
}

exports.create = (main, callback) => {
    CRUD((mains, client) => {
        mains.insertOne(main)
            .then(result => callback(result.insertedCount))
            .catch(err => console.log(err))
            .finally(() => client.close());
    });
};
// exports.update = (id, info, callback) => {
//     CRUD((main, client) => {
//         main.updateOne({ _id: id }, { $set: info })
//             .then(result => callback(result.modifiedCount))
//             .catch(err => handleError(err, res))
//             .finally(() => client.close());
//     });
// };
