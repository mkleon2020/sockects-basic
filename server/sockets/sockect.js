const {io} = require ('../server');

//saber cuando se conecta un cliente
io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.emit('enviarMensaje',{
        nombre:'Juan',
        msg:'Bienvenido'
    });

    client.on('disconnect',() => {
        console.log("Usuario desconectado");
    });

    //Escuchar el cliente
    client.on('enviarMensaje',(data, callback) => {
        console.log(data);
        // broadcast es para enviar mensaje a todos los conectados desde el servidor
        client.broadcast.emit('enviarMensaje', data);
        // if(msg.usuario){

        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // }else{
        //     callback({
        //         resp: 'TODO SALIO MAL!'
        //     });
        // }
    });

});