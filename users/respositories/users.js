const MongoLib = require('../lib/mongodb');
const mongo = new MongoLib();

const Users = module.exports;

Users.create = async (data) => {
    const userCreation = mongo.create(data);
    return userCreation;
};

Users.findById = async (data) => {
    const userIdFinded = mongo.find(data);
    return userIdFinded;
};

Users.findByName = async (data) => {
    const userIdFinded = mongo.find(data);
    return userIdFinded;
};

Users.modify = async (data) => {
    const userModify = mongo.update(data);
    return userModify;
}

Users.getAllUsers = async () => {
    const allUsers = mongo.getUsers();
    return allUsers;
}