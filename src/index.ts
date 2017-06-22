import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const instance = express();
instance.use(bodyParser.json());
instance.use(cors());

const app = NestFactory.create(ApplicationModule, instance);
app.listen(3000, () => console.log('Applicacion is listening on port 3000'));