import express from 'express';
import CatRouter from './routes/cat.routes'
import AiRouter from './routes/ai.routes';
const app = express();

app.use(express.json());
app.use("/api/cats", CatRouter);
app.use("/api/ai", AiRouter);
// app.get('/', (req: express.Request, res: express.Response) => {
//   res.send({
//     success: true,
//     message: 'Welcome to the Tiny Cats API!',
//   });
// });

export default app;