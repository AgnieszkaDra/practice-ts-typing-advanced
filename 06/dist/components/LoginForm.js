import createFields from '../utils/createFields';
import { submitForm } from '../utils/submitForm';
import createWrapperForForm from './createWrapperForForm';
export const LoginForm = (inputs) => {
    const wrapper = createWrapperForForm(inputs, 'login');
    const filteredInputs = inputs.filter(input => input.category === 'login');
    filteredInputs.forEach(element => {
        const input = createFields.createFields(element);
        wrapper.appendChild(input);
    });
    const submitButton = document.createElement('button');
    submitButton.className = 'button';
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';
    wrapper.appendChild(submitButton);
    submitForm(wrapper, inputs, 'login');
    return wrapper;
};
export default LoginForm;
