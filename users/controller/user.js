const UserService = require('../services/userServices');

const UserController = module.exports;

UserController.create = async (req, res, next) => {
    const { username, password } = req.body;
    const userCreation = UserService.createUser(username, password).then((result) => {
        res.status(result.status).send(result.message)
    }).catch(() => { res.status(500).send("Internal server error") });

    return userCreation;
};

UserController.delete = async (req, res, next) => {
    const { username } = req.body;
    const userDeletion = UserService.deleteUser(username).then((result) => {
        res.status(result.status).send(result.message)
    }).catch(() => { res.status(500).send("Internal Server error") });

    return userDeletion;
};

UserController.modify = async (req, res, next) => {
    const { username, password } = req.body;
    const userModifier = UserService.modifyUser(username, password).then((result) => {
        res.status(result.status).send(result.message)
    }).catch(() => { res.status(500).send("Internal Server error") });

    return userModifier;
};

UserController.allUserlist = async (req, res) => {
    await UserService.listAllUsers().then(result => {
        res.status(200).send(result)
    }).catch(err => {
        console.log(err)
    })
}

UserController.validate = async (req, res, next) => {
    const { username, password } = req.body;
    const auth = UserService.validateAuth(username, password).then(result => {
        return result.data;
    }).catch(() => {
        res.status(500).send("Internal server error")
    })
    return auth;
}

