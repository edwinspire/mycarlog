// Include the cluster module
var cluster = require("cluster");
import * as sapper from "@sapper/server";
import sirv from "sirv";
import compression from "compression";
import virtual_route from "@app_express_routes/routes";
import fs from "fs";
import https from "https";

// Para generar los certificados correr el siguiente comando, completar los datos que solicita y copiar los dos archivos que se generan
// openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout etafashion-selfsigned.key -out etafashion-selfsigned.crt
var privateKey = fs.readFileSync("./certs/selfsigned.key", "utf8");
var certificate = fs.readFileSync("./certs/selfsigned.crt", "utf8");
var credentials = { key: privateKey, cert: certificate };
//var express = require('express');
//var app = express();

const express = require("express");
const morgan = require("morgan");
const http = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

//console.log(process.env);
//const PORT = process.env.PORT || 5000 // Esto lo define Heroku
//process.env.DATABASE_URL =  'postgresql://dbuser:secretpassword@database.server.com:3211/mydb';
if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require("os").cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const app = express(); //instancia de express
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(compression());
  app.use(virtual_route);
  app.use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  );

  /*
  app.listen(process.env.PORT, () => {
    console.log("Example app listening on port " + process.env.PORT+' '+cluster.worker.id);
  });
*/
console.log(process.env.LOCAL_SERVER);
  if (!process.env.LOCAL_SERVER) {
    var httpServer = http.createServer(app);
    httpServer.listen(process.env.PORT, () => {
      console.log(
        "Example app listening on port " +
          process.env.PORT +
          " " +
          cluster.worker.id
      );
    });
  } else {
    var httpsServer = https.createServer(credentials, app);
    httpsServer.listen(process.env.PORT, () => {
      console.log(
        "Example app HTTPS listening on port " +
          process.env.PORT +
          " " +
          cluster.worker.id
      );
    });
  }

  //

  //httpServer.listen(8080);
}

// Listen for dying workers
cluster.on("exit", function (worker) {
  // Replace the dead worker,
  // we're not sentimental
  console.log("Worker %d died :(", worker.id);
  cluster.fork();
});

/*
import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
*/
