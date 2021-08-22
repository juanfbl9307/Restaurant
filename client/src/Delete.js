import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

function Delete() {

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurants, restaurantList] = useState([]);


    const submitRestaurant = () => {
        Axios.post(routes.deleteRestaurant, {
            restaurantName: restaurantName
        }).then(() => {
            alert('Restaurante Eliminado')
        })
    }

    const sortNameAsc = () => {
        Axios.get(routes.listRestaurantsByName).then((result) => {
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
        <br></br>
        <br></br>
        <Card>
            <Card.Body>
                <div className='form'>
                    <Form.Label>Nombre del restaurante</Form.Label>
                    <Form.Control type='text' name='name' onChange={(e) => {
                        setRestaurantName(e.target.value)
                    }} />

                    <Button onClick={submitRestaurant} >Eliminar</Button>
                </div>
            </Card.Body>
        </Card>


        <div className='form'>
            <h1>Nombres de Restaurantes: </h1>
            {restaurants.map((val) => {
                return <div className="card">
                    {val.restaurantName}
                </div>

            })}

        </div>
    </div>;
}

export default Delete;