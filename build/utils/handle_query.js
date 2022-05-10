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
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
const resize_img_1 = __importDefault(require('./resize_img'));
const resize = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
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
    const fileName = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (isNaN(width) || isNaN(height)) {
      res.send('ERROR: Please enter the width and height of the image.');
      return;
    }
    const srcFilePath = path_1.default.join(
      __dirname + '../../../assets/full/' + fileName + '.jpg'
    );
    const dstDir = path_1.default.join(__dirname + '../../../assets/thumb/');
    const dstFilePath =
      dstDir + fileName + '_w' + width + '_h' + height + '.jpg';
    // check whether the image exists
    try {
      fs_1.default.accessSync(srcFilePath);
    } catch (error) {
      res.send('ERROR: Requested file does not exist.');
      return;
    }
    // check whether the dstDir exist
    try {
      fs_1.default.accessSync(dstDir);
    } catch (error) {
      fs_1.default.mkdirSync(dstDir);
    }
    yield (0, resize_img_1.default)(srcFilePath, width, height, dstFilePath);
    res.sendFile(dstFilePath);
    return;
  });
exports.default = resize;
