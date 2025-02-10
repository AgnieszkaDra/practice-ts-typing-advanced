"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createWrapperForInput_1 = __importDefault(require("./createWrapperForInput"));
const createTextField = (field) => {
    var _a;
    const wrapper = (0, createWrapperForInput_1.default)(field);
    const input = document.createElement('input');
    input.className = 'input';
    input.type = 'text';
    input.placeholder = (_a = field.placeholder) !== null && _a !== void 0 ? _a : '';
    input.name = field.name;
    wrapper.insertBefore(input, wrapper.querySelector('.error-message'));
    return wrapper;
};
exports.default = createTextField;
// import { TextField } from '../../types/InputField';
// const createTextField = (field: TextField): HTMLInputElement => {
//   const input = document.createElement('input');
//   input.className = 'input';
//   input.type = 'text';
//   input.placeholder = field.placeholder ?? '';
//   input.name = field.name;
//   return input;
// };
// export default createTextField;
