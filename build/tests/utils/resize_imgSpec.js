'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const path_1 = __importDefault(require('path'));
const resize_img_1 = __importDefault(require('../../utils/resize_img'));
describe('Test resize image', () => {
  it('The width and height should be 200', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const fileName = 'fjord';
      const width = 200;
      const height = 200;
      const srcFilePath = path_1.default.join(
        __dirname + '../../../../assets/full/' + fileName + '.jpg'
      );
      const dstDir = path_1.default.join(
        __dirname + '../../../../assets/thumb/'
      );
      const dstFilePath =
        dstDir + fileName + '_w' + width + '_h' + height + '.jpg';
      yield (0, resize_img_1.default)(srcFilePath, width, height, dstFilePath);
      expect(dstFilePath).toBeTruthy();
    }));
});
