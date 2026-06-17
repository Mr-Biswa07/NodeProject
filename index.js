// console.log("Hello Jenkins Pipeline");
// let a = 5;
// let b = 25;
// console.log("total value:", a + b);
const http = require('http');

const server = http.createServer((req, res) => {

   res.write("Hello from Jenkins Auto Deployment !!!!");

   res.end();

});

server.listen(3000, '0.0.0.0', () => {

   console.log("Server Running on port 3000");

});
