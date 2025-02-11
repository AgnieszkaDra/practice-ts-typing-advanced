import createWrapperForInput from "./createWrapperForInput";
const createEmailField = (field) => {
    var _a;
    const wrapper = createWrapperForInput(field);
    const input = document.createElement("input");
    input.className = "input";
    input.type = "email";
    input.name = field.name;
    input.required = (_a = field.required) !== null && _a !== void 0 ? _a : false;
    if (field.placeholder)
        input.placeholder = field.placeholder;
    wrapper.insertBefore(input, wrapper.querySelector(".error-message"));
    return wrapper;
};
export default createEmailField;
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
