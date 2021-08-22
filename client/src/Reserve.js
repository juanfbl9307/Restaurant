import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

function Reserves() {


    const [restaurantName, setRestaurantName] = useState('');
    const [reserveDate, setReserveDate] = useState('');



    const [restaurants, restaurantList] = useState([]);

    useEffect(() => {
        Axios.get(routes.listRestaurantsByName).then((result) => {
            restaurantList(result.data);
        })
    })

    const submitReservation = () => {
        Axios.post(routes.makeReserve, {
            restaurantName: restaurantName, date: reserveDate
        }).then(() => {
            alert('Reserva realizada')
        })
    }

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

        <Card>
            <Card.Body>
                <div className='form'>
                    <Form.Label>Nombre del restaurante</Form.Label>
                    <Form.Control type='text' name='name' onChange={(e) => {
                        setRestaurantName(e.target.value)
                    }} />
                    <Form.Label>Fecha de la reserva</Form.Label>
                    <Form.Control type='date' name='date' onChange={(e) => {
                        setReserveDate(e.target.value)
                    }} />

                    <Button onClick={submitReservation} >Reservar</Button>
                    <h1>Restaurantes: </h1>
                    {restaurants.map((val) => {
                        return <div className="card">
                            Nombre: {val.restaurantName} Ciudad: {val.restaurantCity}
                        </div>
                    })}
                </div>
            </Card.Body>
        </Card>
    </div>;
};



export default Reserves;