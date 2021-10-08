const MongoLib = require('../lib/mongodb');
const mongo = new MongoLib();

const Users = module.exports;

Users.create = async (data) => {
    const userCreation = mongo.create(data);
    return userCreation;
};

Users.findById = async (data) => {
    const userIdFind = mongo.find(data);
    return userIdFind;
};

Users.findByName = async (data) => {
    const userIdFind = mongo.find(data);
    return userIdFind;
};

Users.modify = async (data) => {
    const userModify = mongo.update(data);
    return userModify;
}

Users.getAllUsers = async () => {
    const allUsers = mongo.getUsers();
    return allUsers;
}