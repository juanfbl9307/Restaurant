import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

function Modify() {

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurantDescription, setRestaurantDescription] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantCity, setRestaurantCity] = useState('');
    const [restaurantImgURL, setRestaurantImgURL] = useState('');
    const [restaurants, restaurantList] = useState([]);


    const submitRestaurant = () => {
        Axios.post(routes.createRestaurant, {
            restaurantName: restaurantName, restaurantDescription: restaurantDescription, restaurantAddress: restaurantAddress,
            restaurantCity: restaurantCity, restaurantImgURL: restaurantImgURL
        }).then(() => {
            alert('Restaurante agregado')
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

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type='text' name='description' onChange={(e) => {
                        setRestaurantDescription(e.target.value)
                    }} />
                    <Form.Text className="description">
                        <p>Tipo de comida, ambiente y mas referencias!</p>
                    </Form.Text>

                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type='text' name='addres' placeholder="Calle 74 11 91" onChange={(e) => {
                        setRestaurantAddress(e.target.value)
                    }} />

                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type='text' name='city' placeholder="Bogota" onChange={(e) => {
                        setRestaurantCity(e.target.value)
                    }} />

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type='text' name='imagen' placeholder="URL" onChange={(e) => {
                        setRestaurantImgURL(e.target.value)
                    }} />

                    <Button onClick={submitRestaurant} >Agregar</Button>
                </div>
            </Card.Body>
        </Card>


        <div className='form'>
            <h1>Restaurantes: </h1>
            {restaurants.map((val) => {
                return <div className="card">
                    Restaurante: {val.restaurantName}, Descripcion: {val.restaurantDescription}, Direccion: {val.restaurantAddress}, Ciudad: {val.restaurantCity}, Url Imagen: {val.restaurantImgURL}
                </div>

            })}

        </div>
    </div>;
}

export default Modify;