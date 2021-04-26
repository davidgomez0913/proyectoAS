import React from 'react';
import Image from './image'


const Profile = (props) => {
    return (
        <div>
            <h1>Componente de perfil</h1>
            <p>Nombre del cliente: {props.name}</p>
            <p>Apellido del cliente: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Valor del contador: {props.counter}</p>
            <button onClick={props.incrementCounterTwo}>Incrementa +2 el contador</button>
            <Image/>
        </div>
    )
}

export default Profile;