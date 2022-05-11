import sharp from 'sharp';

const resizeImage = async (
  srcFilePath: string,
  width: number,
  height: number,
  dstFilePath: string
): Promise<void> => {
  await sharp(srcFilePath)
    .resize(width, height)
    .toFormat('jpeg')
    .toFile(dstFilePath);
};

export default resizeImage;
