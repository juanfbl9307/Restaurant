import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import './App.css';
import { Alert } from 'bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <RestauranteCreate />
                <RestaurantList />
                <Reserve />
            </div>
        )
    }
};

function RestauranteCreate() {
    //Crear restaurantes con Nombre, Direccion, Ciudad, Descripcion e imagen
    return (
        <div>
            <b>Crear Restaurantes</b>
            <p></p>
            <Form.Label>Nombre del restaurante</Form.Label>
            <Form.Control type='text' name='name' onChange={(e) => { }} />
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type='text' name='descripcion' onChange={(e) => { }} />
            <Form.Label>Direccion</Form.Label>
            <Form.Control type='text' name='address' onChange={(e) => { }} />
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type='text' name='city' onChange={(e) => { }} />
            <Form.Label>URL Imagen</Form.Label>
            <Form.Control type='text' name='imgurl  ' onChange={(e) => { }} />
            <div>
                <Button>Agregar</Button>

            </div>
        </div>
    )
};

function RestaurantList() {
    //Listar restaurantes por ciudad y nombre DESC y ASC
    //Buscar restaurantes por nombre
    //Info (Direccion, Descripccion, Imagen), Edit (Delete, Update Info)
    const [dropdown, setDropdown] = useState(false);
    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    }
    const quiuvo = () => {
        alert("OJO")
    }

    return (
        <div id="restList">
            <b>Lista de restaurantes</b>
            <p></p>
            <Form.Label>Buscar Restaurante</Form.Label>
            <Form.Control type='text' name='search' placeHolder="Nombre" onChange={(e) => { }} />
            <p></p>
            <b>Ordenar por:</b>
            <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
                <DropdownToggle caret className="buttonDropdown">
                    Ordenar
                    </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => quiuvo()}>Nombre A - Z</DropdownItem>
                    <DropdownItem>Nombre Z - A</DropdownItem>
                    <DropdownItem>Ciudad A - Z</DropdownItem>
                    <DropdownItem>Ciudad Z - A</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <p></p>
            <Button>INFO</Button>
            <div class="divider" />
            <Button>EDIT</Button>

        </div>
    )
};

function Reserve() {
    //Listar restaurantes por ciudad y nombre DESC y ASC
    //Ver informacion del restaurante
    //Reservar por fecha
    //Ver cupos disponibles
    const [dropdown, setDropdown] = useState(false);
    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    }
    return (
        <div id="restList">
            <b>Lista de restaurantes</b>
            <p></p>
            <div>
                <b>Ordenar por:</b>
                <Dropdown isOpen={dropdown} toggle={openCloseDropdown}>
                    <DropdownToggle caret>
                        Ordenar
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Nombre A - Z</DropdownItem>
                        <DropdownItem>Nombre Z - A</DropdownItem>
                        <DropdownItem>Ciudad A - Z</DropdownItem>
                        <DropdownItem>Ciudad Z - A</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </div>
            <Form.Label>Buscar Restaurante</Form.Label>
            <Form.Control type='text' name='search' placeHolder="Nombre" onChange={(e) => { }} />
            <p></p>
            <b>Ordenar por:</b>
            <p></p>
            <Form.Label>Fecha de reserva</Form.Label>
            <Form.Control type='date' name='date' onChange={(e) => { }} />
            <Button>RESERVAR</Button>
        </div>

    )

};

export default App;

