//import { InputField } from "../types/InputField.js";
import { InputField } from "../types/InputField.js";

const FormComponent = (fields: InputField[]): HTMLElement => {
  const form = document.createElement('form');
  form.className = 'form';

  fields.forEach(field => {
    const label = document.createElement("label");
    label.textContent = field.label;
    const input = document.createElement("input");
    input.name = field.name;
    input.type = field.type || "text";
    input.value = field.value || "";
    form.appendChild(label);
    form.appendChild(input);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);

  return form;
}

export default FormComponent;