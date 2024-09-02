import express from 'express';
import { MAIN_CONFIG } from './config/index';
import cors from 'cors';
import * as mongoose from 'mongoose';

const httpPort = 3000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/test`);
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

const initHTTPServer = () => {
    const app = express();
    // app.use('/', cors(), healthcheckRouter);

    return app;
};


const bootstrap = async () => {
    const httpServer = initHTTPServer();

    httpServer.listen(httpPort, () => {
        console.log(`Server running at http://localhost:${httpPort}`);
    });    
};
bootstrap();
