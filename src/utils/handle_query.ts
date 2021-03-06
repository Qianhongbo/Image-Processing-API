import express from 'express';
import fs from 'fs';
import path from 'path';
import resizeImage from './resize_img';

const resize = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  // if the input of query is not complete
  // report error...
  if (
    req.query.filename === undefined ||
    req.query.width === undefined ||
    req.query.height === undefined
  ) {
    res.send('ERROR: The input query is not enough.');
    return;
  }

  const fileName = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  if (isNaN(width) || isNaN(height)) {
    res.send('ERROR: Please enter the width and height of the image.');
    return;
  }

  if (width < 0 || height < 0) {
    res.send('ERROR: The width or height cannot be negative.');
    return;
  }

  const srcFilePath: string = path.join(
    __dirname + '../../../assets/full/' + fileName + '.jpg'
  );
  const dstDir: string = path.join(__dirname + '../../../assets/thumb/');
  const dstFilePath: string =
    dstDir + fileName + '_w' + width + '_h' + height + '.jpg';

  // check whether the image exists
  try {
    await fs.promises.access(srcFilePath);
  } catch (error) {
    res.send('ERROR: Requested file does not exist.');
    return;
  }

  // check whether the dstDir exist
  try {
    await fs.promises.access(dstDir);
  } catch (error) {
    await fs.promises.mkdir(dstDir);
  }

  // resize the image
  // check whether the resized image has been created
  try {
    await fs.promises.access(dstFilePath);
  } catch {
    await resizeImage(srcFilePath, width, height, dstFilePath);
  }

  res.sendFile(dstFilePath);
};

export default resize;
