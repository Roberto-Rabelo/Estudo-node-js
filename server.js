// arquivo principal da API primeiro executado 
// onde irá inclui configurações da API com express

const http = require('http'); // importando protocolo
const app = require('./app');
const port = process.env.PORT || 3000; // Configurando porta 

const server = http.createServer(app);

server.listen(port); //   serve escutando na porta config