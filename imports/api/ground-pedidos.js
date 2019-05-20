import { Ground } from 'meteor/ground:db';
import Pedidos from './pedidos';


GroundPedidos = new Ground.Collection('ground-pedidos');
GroundPedidos.observeSource(Pedidos.find());

export default GroundPedidos;