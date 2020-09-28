var socket = io();
// on es para escuchar
socket.on('connect', function(){
	console.log('Conectado al servidor');
});
// on es para escuchar
socket.on('disconnect', function(){
	console.log('Perdimos conexion con el servidor');
});

//Emit es para Enviar informacion
socket.emit('enviarMensaje',{
	usuario: 'Maikol',
	msg: 'Hola pavo'
}, function(resp){
	console.log('respuesta server',resp);
});

//Escuchar informacion del lado del cliente
socket.on('enviarMensaje', function(msg){
	console.log('Desde el servidor',msg);
});