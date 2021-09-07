const mysql = require('../lib/mysql');

const database = mysql;
const table = 'users';
const Users = module.exports;

Users.create = async (table, username, password, role) => {
    const createNewUser = await database.createUser(table, username, password, role);
    return createNewUser;
};
