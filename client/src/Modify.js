import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
const routes = require('./routes');

function Modify() {

    const [restaurantName, setRestaurantName] = useState('');
    const [restaurtantNewName, setRestaurantNewName] = useState('');
    const [restaurantDescription, setRestaurantDescription] = useState('');
    const [restaurantAddress, setRestaurantAddress] = useState('');
    const [restaurantCity, setRestaurantCity] = useState('');
    const [restaurantImgURL, setRestaurantImgURL] = useState('');
    const [restaurants, restaurantList] = useState([]);


    const submitRestaurant = () => {
        Axios.post(routes.modifyRestaurant, {
            restaurantName: restaurantName, restaurtantNewName: restaurtantNewName, restaurantDescription: restaurantDescription, restaurantAddress: restaurantAddress,
            restaurantCity: restaurantCity, restaurantImgURL: restaurantImgURL
        }).then(() => {
            alert('Restaurante modificado')
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

                    <Form.Label>Nuevo Nombre del restaurante</Form.Label>
                    <Form.Control type='text' name='newName' onChange={(e) => {
                        setRestaurantNewName(e.target.value)
                    }} />

                    <Form.Label>Nueva Descripcion</Form.Label>
                    <Form.Control type='text' name='description' onChange={(e) => {
                        setRestaurantDescription(e.target.value)
                    }} />
                    <Form.Text className="description">
                        <p>Tipo de comida, ambiente y mas referencias!</p>
                    </Form.Text>

                    <Form.Label>Nueva Direccion</Form.Label>
                    <Form.Control type='text' name='addres' placeholder="Calle 74 11 91" onChange={(e) => {
                        setRestaurantAddress(e.target.value)
                    }} />

                    <Form.Label>Nueva Ciudad</Form.Label>
                    <Form.Control type='text' name='city' placeholder="Bogota" onChange={(e) => {
                        setRestaurantCity(e.target.value)
                    }} />

                    <Form.Label>Nueva Imagen</Form.Label>
                    <Form.Control type='text' name='imagen' placeholder="URL" onChange={(e) => {
                        setRestaurantImgURL(e.target.value)
                    }} />

                    <Button onClick={submitRestaurant} >Modificar</Button>
                </div>
            </Card.Body>
        </Card>


        <div className='form'>
            <h1>Restaurantes: </h1>
            {restaurants.map((val) => {
                return <div className="card">
                    Restaurante: {val.restaurant_name}, Descripcion: {val.restaurant_description}, Direccion: {val.restaurant_address}, Ciudad: {val.restaurant_city}, Url Imagen: {val.restaurant_img_url}
                </div>

            })}

        </div>
    </div>;
}

export default Modify;