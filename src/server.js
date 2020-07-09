import * as sapper from "@sapper/server";
import sirv from "sirv";
import compression from "compression";
import virtual_route from "@app_express_routes/routes";

const express = require("express");
const morgan = require("morgan");
const http = require("http");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

//console.log(process.env);
//const PORT = process.env.PORT || 5000 // Esto lo define Heroku
//process.env.DATABASE_URL =  'postgresql://dbuser:secretpassword@database.server.com:3211/mydb';

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

app.listen(process.env.PORT, () => {
  console.log("Example app listening on port " + process.env.PORT);
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
