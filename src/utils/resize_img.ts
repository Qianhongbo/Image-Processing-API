import sharp from 'sharp';

const resizeImage = async (
  srcFilePath: string,
  width: number,
  height: number,
  dstFilePath: string
) => {
  console.log('resizing image...');
  await sharp(srcFilePath)
    .resize(width, height)
    .toFormat('jpeg')
    .toFile(dstFilePath);
};

export default resizeImage;
