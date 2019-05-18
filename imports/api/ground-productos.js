import { Ground } from 'meteor/ground:db';
import Productos from './productos';


GroundProductos = new Ground.Collection('ground-productos');
GroundProductos.observeSource(Productos.find());

export default GroundProductos;