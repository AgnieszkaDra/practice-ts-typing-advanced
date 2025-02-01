import { InputField } from '../types/InputField';

export const createWrapperForForm = (inputs: InputField[]): HTMLFormElement => {
  const form = document.createElement('form');
  form.className = 'form';
  form.setAttribute("novalidate", "");

  return form;
}

export default createWrapperForForm;