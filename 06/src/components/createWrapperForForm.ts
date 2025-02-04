import { InputField } from '../types/InputField';
import createFields from '../utils/createFields';

export const createWrapperForForm = (inputs: InputField[], className: string): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'form';
  form.setAttribute("novalidate", "");

  form.classList.add(`form--${className}`);

  // inputs.forEach(element => {
  //   const input = createFields.createFields(element);
  //   form.appendChild(input);
  // });

  return form;
}

export default createWrapperForForm;