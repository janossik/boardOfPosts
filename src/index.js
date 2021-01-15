//Importy
const http = require("http");
const app = require("./app");
//Stałe
const PORT = process.env.PORT | 8080;

//Wykonywanie
const server = http.createServer(app);

server.listen(PORT, () => {
  console.clear();
  console.log("Server run on port " + PORT);
});
