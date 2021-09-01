import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import Axios from 'axios';
const routes = require('./routes');

function ListReserves() {
    const [reserves, setListReserves] = useState([]);

    useEffect(() => {
        Axios.get(routes.listReserves).then((result) => {
            setListReserves(result.data);
        })
    })

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


        <div className='form'>
            <h1>Reservas: </h1>
            {reserves.map((val) => {
                return <div className="card">
                    Restaurante: {val.restaurant_name} ,Numero de reserva: {val.reserve_number} ,Fecha: {val.reserve_date}
                </div>
            })}
        </div>
    </div>;
};

export default ListReserves;