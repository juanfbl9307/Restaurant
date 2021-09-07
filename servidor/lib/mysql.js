const mysql = require('mysql');
const dotenv = require('dotenv');
const id = require('uuid');
dotenv.config();

var connection;

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_NAME || 'restaurantDb',
};

const handleConnection = () => {
    connection = mysql.createConnection(dbConfig);
    connection.connect((err) => {
        if (err) {
            console.error('Db error', err);
            setTimeout(handleConnection, 2000);
        } else {
            console.log('Conexion a la base de datos exitosa');
        }
    });

    connection.on('error', err => {
        console.error('Database error', err);
        if (err.code == 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    });
};
handleConnection();

const create = async (table, restaurantId, restaurantName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL) => {
    let keys = [`restaurant_id, restaurant_name, restaurant_description, restaurant_address, restaurant_city, restaurant_img_url`];
    let values = [`'${restaurantId}', '${restaurantName}', '${restaurantDescription}', '${restaurantAddress}', '${restaurantCity}', '${restaurantImgURL}'`];
    let query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
    const restaurantCration = connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return null;
        };
        return result;
    });
    return restaurantCration;
};

const deleteByName = async (table, restaurantName) => {
    let query = `DELETE FROM ${table} WHERE restaurant_name = '${restaurantName}'`;
    const nameDeleted = connection.query(query, (err, result) => {

        if (err) {
            return console.log(err);
        };
        return result;
    });
    return nameDeleted;
};

const updateRestaurant = async (table, restaurantName, restaurtantNewName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL) => {
    let query = `UPDATE ${table} SET restaurant_name = '${restaurtantNewName}', restaurant_description = '${restaurantDescription}', restaurant_address = '${restaurantAddress}', restaurant_city = '${restaurantCity}', restaurant_img_url = '${restaurantImgURL}' WHERE restaurant_name = '${restaurantName}'`;
    const updated = connection.query(query, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        return result;
    });
    return updated;
};

const getSortByName = (table, sorted) => {
    let names = new Promise((resolve, reject) => {
        let query = `SELECT * FROM ${table} ORDER BY restaurant_name ${sorted}`;

        connection.query(query, (err, result) => {

            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(JSON.parse(JSON.stringify(result)));
        })

    })

    return names.then(result => {
        return result
    }).catch(e => { throw e });
};

const getSortByCity = (table, sorted) => {
    let cities = new Promise((resolve, reject) => {
        let query = `SELECT * FROM ${table} ORDER BY restaurant_city ${sorted}`;

        connection.query(query, (err, result) => {

            if (err) {
                console.log(err);
                reject(err)
            }
            resolve(JSON.parse(JSON.stringify(result)));
        })

    })

    return cities.then(result => {
        return result;
    }).catch(e => { throw e });
};

const makeReserve = async (table, reserveNum, restaurantId, date, restaurantName) => {
    let createId = id.v4();
    let keys = [`reserve_number, reserve_date, reserve_id, restaurant_id, restaurant_name`];
    let values = [`${reserveNum}, '${date}', '${createId}', '${restaurantId}', '${restaurantName}'`];
    let query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
    const reservation = connection.query(query, (err, result) => {
        if (err) {
            console.log(err)
            return err;
        };
        return result;
    });
    return reservation;
};

const listReserves = async (table) => {
    let query = `SELECT * FROM ${table}`;
    let reserves = new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(result);
        });
    });
    return reserves.then(result => {
        return result;
    }).catch(e => { throw e });

};

const listByDate = async (table, date) => {
    let query = `SELECT COUNT (*) FROM ${table} WHERE reserve_date = '${date}'`;
    let reserves = new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(JSON.parse(JSON.stringify(result)));
        });
    });
    return reserves.then(result => {
        result = Object.values(result[0])
        return result[0];
    }).catch(e => { throw e });

};

const listRestaurantDate = async (table, restaurantId, date) => {
    let query = `SELECT MAX(reserve_number) FROM ${table} WHERE restaurant_id = '${restaurantId}'`;
    let reserves = new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            resolve(JSON.parse(JSON.stringify(result)));
        });
    });
    return reserves.then(result => {
        result = Object.values(result[0])
        return result[0];
    }).catch(e => { throw e });

};

const getRestaurantId = async (restaurantName) => {
    let restaurantId = new Promise((resolve, reject) => {
        let query = `SELECT restaurant_id FROM restaurants WHERE restaurant_name = '${restaurantName}'`;

        connection.query(query, (err, result) => {

            if (err) {
                console.log(err);
                reject(err)
            }
            resolve(JSON.parse(JSON.stringify(result)));
        })

    })

    return restaurantId.then(result => {
        if (result.length == 0) {
            return false
        }
        result = Object.values(result[0])
        return result[0];
    }).catch(e => { throw e });
};

const createUser = async (table, username, password, role) => {
    let keys = [`username, password, role`];
    let values = [`'${username}', '${password}', '${role}'`];
    let query = `INSERT INTO ${table} (${keys}) VALUES (${values})`;
    const userCreation = connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return null;
        };
        return result;
    });
    return userCreation;
};


module.exports = {
    create, deleteByName, getSortByName, getSortByCity,
    makeReserve, listReserves, listByDate,
    listRestaurantDate, getRestaurantId, updateRestaurant,
    createUser
};