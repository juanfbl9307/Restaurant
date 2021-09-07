const Users = require('../respositories/users');
const passwordEncoging = require('md5');

const UserService = module.exports;

UserService.createUser = async (username, password) => {

    const data = { username, password: passwordEncoging(JSON.stringify(password)) }
    const username_data = { username: `${username}` };
    const userExist = await Users.findByName(username_data);
    let result;
    if (userExist) {
        result = {
            status: 400,
            message: `User ${username} already Exist`
        };
        return result;
    }
    const userCreated = await Users.create(data);
    if (userCreated) {
        result = {
            status: 200,
            message: `User ${username} created`
        };
    } else {
        result = {
            status: 500,
            message: `Internal server error`
        };
    }
    return result;
};

UserService.validateAuth = async (username, password) => {
    const username_password = { password: passwordEncoging(JSON.stringify(password)) };
    const userValidate = await Users.findByName(username_password);
    if (userValidate) {
        let response = {
            status: 200,
            message: "Authorized",
            data: userValidate
        }
        return response
    }
    else {
        let response = {
            status: 401,
            message: "Unauthorized",
            data: { _id: null, password: null }
        }
        return response
    }

}

UserService.modify = async (id, username, password) => {
    const userById = await Users.findById({ _id: ObjectId(id) });
    if (password != "") {
        const usernameModify = Users.modify({})
    }

};

UserService.listAllUsers = async () => {
    const userList = await Users.getAllUsers();
    return userList;
};
