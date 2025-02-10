import createWrapperForInput from './createWrapperForInput.js';
const createTextField = (field) => {
    var _a;
    const wrapper = createWrapperForInput(field);
    const input = document.createElement('input');
    input.className = 'input';
    input.type = 'text';
    input.placeholder = (_a = field.placeholder) !== null && _a !== void 0 ? _a : '';
    input.name = field.name;
    wrapper.insertBefore(input, wrapper.querySelector('.error-message'));
    return wrapper;
};
export default createTextField;
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
