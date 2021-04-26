// Class component
import React from 'react';
import { Component } from 'react'; // para que herede los atributos o metodos del component
import Profile from './profile'

class UserComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: "David",
            lastName: "Gomez",
            age: 24,
            gender: "Male",
            email: "dafergo95@hotmail.com",
            counter: 0
        }
    }
    sayHello = () => {
        console.log("Hola a todos");
    }
    /*incrementCounterValue = () => {
        this.setState({
            counter: this.state.counter += 1
        })
    }*/
    incrementCounterValue = () => {
        this.setState(prevState => {  // se recomienda usar este solo cuando se deba actualizar un solo valor
            return prevState.counter += 0.5
        })
    }

    incrementCounterValuex2 = () => {
        this.setState(prevState => {  // se recomienda usar este solo cuando se deba actualizar un solo valor
            return prevState.counter += 1
        })
    }

    render() {
        const { name, lastName, age, gender, email, counter } = this.state
        return (
            <div>
                <h1>hola Mundo</h1>
                <p>mi nombre es {name} {lastName}</p>
                <p>Tengo {age} años</p>
                <p>soy {gender}</p>
                <p>Mi correo electronico es: {email}</p>
                <button type="button" onClick={() => this.incrementCounterValue()}>Dale click para incrementar</button>
                <p>{counter}</p>
                <Profile
                    name={name} // estas son las props que se pasan, son como los argumentos de una funcion
                    lastName={lastName}
                    email={email}
                    counter={counter}
                    incrementCounterTwo={this.incrementCounterValuex2}
                />
            </div>
        )
    }
}

export default UserComponent;