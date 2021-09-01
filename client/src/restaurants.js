import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
const routes = require('./routes');

function Restaurants() {

    const [restaurants, restaurantList] = useState([]);

    const sortNameDesc = () => {
        Axios.get(routes.listRestaurantsByNameDesc).then((result) => {
            restaurantList(result.data);
        })
    };
    const sortNameAsc = () => {
        Axios.get(routes.listRestaurantsByName).then((result) => {
            restaurantList(result.data);
        })
    };
    const sortCitesDesc = () => {
        Axios.get(routes.listRestaurantsByCityDesc).then((result) => {
            restaurantList(result.data);
        })
    };
    const sortCitesAsc = () => {
        Axios.get(routes.listRestaurantsByCity).then((result) => {
            restaurantList(result.data);
        })
    };

    return <div className="App">
        <h1>Restaurant App</h1>
        <Link to="/"><Button>Agregar Restaurante
            </Button></Link>
        <div class="divider" />
        <Link to="/modificarrestaurantes"><Button>Modificar Restaurantes
            </Button></Link>
        <div class="divider" />
        <Link to="/eliminarrestaurantes"><Button>Eliminar Restaurantes
            </Button></Link>
        <div class="divider" />
        <Link to="/reservar"><Button>Hacer Reservas
            </Button></Link>
        <div class="divider" />
        <Link to="/restaurantes"><Button>Lista de Restaurantes
            </Button></Link>
        <div class="divider" />
        <Link to="/reservas"><Button>Lista de Reservas
            </Button></Link>
        <br></br>
        <br></br>
        <Button onClick={sortNameAsc}>Nombre A - Z
            </Button>
        <div class="divider" />
        <Button onClick={sortNameDesc}>Nombre Z - A
            </Button>
        <div class="divider" />
        <Button onClick={sortCitesDesc}>Ciudad A - Z
            </Button>
        <div class="divider" />
        <Button onClick={sortCitesAsc}>Ciudad Z - A
            </Button>

        <div className='form'>
            <h1>Restaurantes: </h1>
            {restaurants.map((val) => {
                return <div className="card">
                    Restaurante: {val.restaurant_name} Ciudad: {val.restaurant_city}
                </div>
            })}
        </div>
    </div>;
}

export default Restaurants;