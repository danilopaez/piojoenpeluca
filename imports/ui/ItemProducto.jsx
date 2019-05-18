import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import pedirMorfi from '../methods/pedir';

export default class ItemProducto extends Component {
    pedir = ev => {
        ev.preventDefault();
        Meteor.call('pedirMorfi', {pedido:1}, e=>{
            if(e)
                return console.log(e)
            
            console.log('Pedido Realizado')
        })
    }


    render() {
        return (
                <div className="" id="PrimeraIMG">
                    <button>mas</button>
                    <h2>Pizzas</h2>
                    <form action="">
                        <input type="number"  />
                        <button
                        onClick={ this.pedir }
                        >
                            Hacé Comer Chinverguencha
                        </button>

                    </form>
                </div>

        );
    }
}
