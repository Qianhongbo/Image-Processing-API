import express from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('add /images?filename=aName&width=aNumber&height=aNumber to resize the image. <br/>' + 
  'The available file name is fjord, encenadaport, icelandwaterfall, palmtunnel, santamonica.');
});

routes.use('/images', images);

export default routes;
