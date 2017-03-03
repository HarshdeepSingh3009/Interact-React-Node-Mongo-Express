
import config from'./config';
import express from 'express';

// import all the routers from individual files
import apiRouter from './routes/index';
import FpRouter from './routes/ForgotPassword';
import registerRouter from './routes/register';
import homeRouter from './routes/home';
import commonRoutes from './routes/common';
import path from 'path';
import bodyparser from "body-parser";
import multer from "multer";
//import serverRender from  './serverRender';


const server = express();
server.set('view engine', 'ejs');

server.use(apiRouter);
server.use(FpRouter);
server.use(registerRouter);
server.use(homeRouter);
server.use(commonRoutes);
server.use(express.static('public')); // called as middleware
server.use(bodyparser.json())
server.use(multer);


server.locals.siteTitle = "DISCUSS";
server.listen(config.port,config.host,()=>{
console.info('Express listening on port ', config.port);
});