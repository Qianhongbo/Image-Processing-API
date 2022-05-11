import express from 'express';
import resize from '../../utils/handle_query';

const images = express.Router();

images.get('/', (req: express.Request, res: express.Response): void => {
  resize(req, res);
});

export default images;
