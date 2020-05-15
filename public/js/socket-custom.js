   var socket = io();

   socket.on('connect', function() {
       console.log('conectado al servidor');
   });
   socket.on('disconnect', function() {
       console.log("perdimos la conexion");

   });
   ///enviar info
   socket.emit('enviarMensaje', {
       usuario: 'Ivan',
       mensaje: 'hello guys'
   }, function(resp) {

       console.log('server dice:', resp);
   });

   //escuchar info
   socket.on('enviarMensaje', function(mensaje) {

       console.log('Servidor:', mensaje);
   })