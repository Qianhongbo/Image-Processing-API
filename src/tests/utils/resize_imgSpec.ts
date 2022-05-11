import path from 'path';
import resizeImage from '../../utils/resize_img';

describe('Test resize image', () => {
  it('The width and height should be 200', async () => {
    const fileName = 'fjord';
    const width = 200;
    const height = 200;
    const srcFilePath = path.join(
      __dirname + '../../../../assets/full/' + fileName + '.jpg'
    );
    const dstDir: string = path.join(__dirname + '../../../../assets/thumb/');
    const dstFilePath: string =
      dstDir + fileName + '_w' + width + '_h' + height + '.jpg';
    await resizeImage(srcFilePath, width, height, dstFilePath);

    expect(dstFilePath).toBeTruthy();
  });
});
