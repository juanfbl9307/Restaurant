const { MongoClient } = require('mongodb');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.8nf1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

class MongoLib {

    dbName;
    client;
    collection;
    constructor() {
        this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.dbName = process.env.DB_NAME;
        this.collection = 'users';
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect(err => {
                if (err) {
                    reject(err);
                }

                console.log('connection added to mongo')
                resolve(this.client.db(this.dbName));

            });
        });
    }

    create(data) {
        return this.connect().then(db => {
            return db.collection(this.collection).insertOne(data)
        })
    }

    find(data) {
        return this.connect().then(db => {
            return db.collection(this.collection).findOne(data)
        })
    }
    update(data) {
        return this.connect().then(db => {
            return db.collection(this.collection).updateOne(data)
        })
    }

    getUsers() {
        return this.connect().then(db => {
            return db.collection(this.collection).find().toArray();
        })
    }

}

module.exports = MongoLib;


