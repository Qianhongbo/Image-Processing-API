import express from 'express';
import resize from '../../utils/handle_query';

const images = express.Router();

images.get('/', (req, res) => {
  resize(req, res);
});

export default images;
