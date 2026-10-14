import express, { Request, Response } from 'express';
import { apiRouter } from '../src/server/apiRouter';

const app = express();

app.use(express.json());
app.use(apiRouter);

export default function handler(req: Request, res: Response) {
  return app(req, res);
}

export { app };
