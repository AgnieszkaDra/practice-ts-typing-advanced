"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createWrapperForInput_1 = __importDefault(require("./createWrapperForInput"));
const createNumberField = (field) => {
    var _a;
    const wrapper = (0, createWrapperForInput_1.default)(field);
    const input = document.createElement('input');
    input.className = 'input';
    input.type = 'number';
    input.placeholder = (_a = field.placeholder) !== null && _a !== void 0 ? _a : '';
    if (field.min !== undefined)
        input.min = field.min.toString();
    if (field.max !== undefined)
        input.max = field.max.toString();
    input.name = field.name;
    wrapper.insertBefore(input, wrapper.querySelector('.error-message'));
    return wrapper;
};
exports.default = createNumberField;
// import { NumberField } from '../../types/InputField';
// const createNumberField = (field: NumberField): HTMLInputElement => {
//   const input = document.createElement('input');
//   input.className = 'input';
//   input.type = 'number';
//   if (field.min !== undefined) input.min = field.min.toString();
//   if (field.max !== undefined) input.max = field.max.toString();
//   input.name = field.name;
//   return input;
// };
// export default createNumberField;
