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
}

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


const create = async (table, data) => {
    let createId = id.v4();
    let keys = [`restaurantId, restaurantName, restaurantDescription, restaurantAddress, restaurantCity, restaurantImgURL`];
    let values = Object.values(data);
    let query = `INSERT INTO ${table} (${keys}) VALUES (?,?)`;
    connection.query(query, [createId, values], (err, result) => {

        if (err) {
            return console.log(err);
        };
        return result;
    });
};

const deleteByName = async (table, restaurantName) => {
    let query = `DELETE FROM ${table} WHERE restaurantName = '${restaurantName}'`;
    connection.query(query, (err, result) => {

        if (err) {
            return console.log(err);
        };
        return result;
    });
};

const updateRestaurant = async (table, data) => {
    let keys = [];
    keys = Object.keys(data);
    let values = [];
    values = Object.values(data);
    let update = [];
    for (let index = 0; index < values.length; index++) {
        update.push(`${keys[index]} = ${values[index]} `);
    }
    console.log(update)
    let query = `UPDATE ${table} SET ${update}`;
    connection.query(query, (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        return result;
    });

};

const getSortByName = (table, sorted) => {
    let names = new Promise((resolve, reject) => {
        let query = `SELECT * FROM ${table} ORDER BY restaurantName ${sorted}`;

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
}

const getSortByCity = (table, sorted) => {
    let cities = new Promise((resolve, reject) => {
        let query = `SELECT * FROM ${table} ORDER BY restaurantCity ${sorted}`;

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
    let keys = [`reserveNum, reserveDate, reserveId, restaurantId, restaurantName`];
    let query = `INSERT INTO ${table} (${keys}) VALUES (?,?,?,?,?)`;
    connection.query(query, [reserveNum, date, createId, restaurantId, restaurantName], (err, result) => {
        if (err) {
            console.log(err)
            return;
        };
        return result;
    });
};

const listReserves = async (table) => {
    let query = `SELECT * FROM ${table}`;
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
        return result;
    }).catch(e => { throw e });

};

const listByDate = async (table, date) => {
    let query = `SELECT COUNT (*) FROM ${table} WHERE reserveDate = '${date}'`;
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
    let query = `SELECT COUNT (*) FROM ${table} WHERE restaurantId='${restaurantId}' AND reserveDate = '${date}'`;
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
        let query = `SELECT restaurantId FROM restaurants WHERE restaurantName = '${restaurantName}'`;

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
}





module.exports = { create, deleteByName, getSortByName, getSortByCity, makeReserve, listReserves, listByDate, listRestaurantDate, getRestaurantId, updateRestaurant };