import Pedidos from '../api/pedidos'

Pedidos.before.insert(function (userId, doc) {
    doc.createdAt = Date.now();
    doc.enServer = true
});