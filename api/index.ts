import express from 'express';
import { apiRouter } from '../src/server/apiRouter';

const app = express();
app.use(express.json());
app.use(apiRouter);

export default app;
