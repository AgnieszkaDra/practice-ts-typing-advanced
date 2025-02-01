import { InputField } from '../types/InputField';
import createFields  from '../utils/createFields';
import { submitForm } from '../utils/submitForm';
import createWrapperForForm from './createWrapperForForm';

export const RegisterForm = (inputs: InputField[]): HTMLElement => {
  const wrapper = createWrapperForForm(inputs);

  const filteredInputs: InputField[] = inputs.filter(input => input.category === 'register');
    filteredInputs.forEach(element => {
    const input = createFields.createFields(element);
    wrapper.appendChild(input);
  });

  const submitButton = document.createElement('button');
  submitButton.className = 'button';
  submitButton.type = 'submit';
  submitButton.textContent = 'Send';
      
  wrapper.appendChild(submitButton);

  submitForm(wrapper, inputs);
  return wrapper;

}

export default RegisterForm;