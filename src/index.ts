import express from 'express';
import routes from './routes/index';
// import File from './file';

const app = express();
const port = 3000;

//set endpoint
app.use('/api', routes);

// check for port to avoid already in use error testing
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
