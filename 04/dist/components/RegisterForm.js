import createFields from '../utils/createFields.js';
import { submitForm } from '../utils/submitForm.js';
import createWrapperForForm from './createWrapperForForm.js';
export const RegisterForm = (inputs) => {
    const wrapper = createWrapperForForm(inputs, 'register');
    const filteredInputs = inputs.filter(input => input.category === 'register');
    filteredInputs.forEach(element => {
        const input = createFields.createFields(element);
        wrapper.appendChild(input);
    });
    const submitButton = document.createElement('button');
    submitButton.className = 'button';
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';
    wrapper.appendChild(submitButton);
    submitForm(wrapper, inputs, 'register');
    return wrapper;
};
export default RegisterForm;
