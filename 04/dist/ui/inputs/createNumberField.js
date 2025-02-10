import createWrapperForInput from "./createWrapperForInput.js";
const createNumberField = (field) => {
    var _a;
    const wrapper = createWrapperForInput(field);
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
export default createNumberField;
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
