"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createWrapperForInput_1 = __importDefault(require("./createWrapperForInput"));
const createSelectField = (field) => {
    const wrapper = (0, createWrapperForInput_1.default)(field);
    const select = document.createElement('select');
    select.className = 'select';
    select.name = field.name;
    field.options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value.toString();
        optionElement.textContent = option.label;
        select.appendChild(optionElement);
    });
    wrapper.insertBefore(select, wrapper.querySelector('.error-message'));
    return wrapper;
};
exports.default = createSelectField;
// const createSelectField = (field: SelectField): HTMLSelectElement => {
//   const select = document.createElement('select');
//   select.className = 'select';
//   field.options.forEach(option => {
//     const optionElement = document.createElement('option');
//     optionElement.value = option.value.toString();
//     optionElement.textContent = option.label;
//     select.appendChild(optionElement);
//   });
//   select.name = field.name;
//   return select;
// };
// export default createSelectField;
