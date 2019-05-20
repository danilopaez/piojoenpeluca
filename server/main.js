import Pedir from '/imports/methods/pedir';
import HookPedir from '/imports/hooks/pedir';
import resetPedidos from './methods/resetPedidos';

import { Meteor } from 'meteor/meteor';
import Productos from '/imports/api/productos';

function insertarProducto(nombre, url) {
    Productos.insert({ nombre, url, createdAt: new Date() });
}

Meteor.startup(() => {

    if (Productos.find().count() === 0) {
        insertarProducto(
            'Pizzas',
            '/img/pizza.jpg'
        );

        insertarProducto(
            'Lomos',
            '/img/lomo.jpg'
        );

        insertarProducto(
            'Empanadas',
            '/img/empa.jpg'
        );


    }
});
