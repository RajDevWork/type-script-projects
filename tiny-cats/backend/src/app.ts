import express from 'express';

const app = express();

app.use(express.json());
app.get('/', (req: express.Request, res: express.Response) => {
  res.send({
    success: true,
    message: 'Welcome to the Tiny Cats API!',
  });
});

export default app;