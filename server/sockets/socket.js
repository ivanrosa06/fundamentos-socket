const { io } = require('../server');




io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', { usuario: 'administrador', mensaje: 'bienvenido a la app' });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //// esto hace que todos los usuarios escuchen el mensaje
        client.broadcast.emit('enviaMensaje', data)
            // if (mensaje.usuario) {
            //     callback({
            //         resp: 'todo salio bien'
            //     });
            // } else {
            //     callback({
            //         resp: 'todo salio mal'
            //     });
            // }

    })

});