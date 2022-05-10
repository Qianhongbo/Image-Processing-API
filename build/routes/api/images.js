'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const handle_query_1 = __importDefault(require('../../utils/handle_query'));
const images = express_1.default.Router();
images.get('/', (req, res) => {
  (0, handle_query_1.default)(req, res);
});
exports.default = images;
