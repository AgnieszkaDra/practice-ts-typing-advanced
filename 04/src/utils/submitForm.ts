import { InputField } from "../types/InputField";
import validateForm from "./validateForm";

export const submitForm = (form: HTMLFormElement, inputs: InputField[]): void => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
       
      const formData: Record<string, string | number> = {};
      inputs.forEach((element) => {
        const input = form.querySelector(`[name=${element.name}]`);
        if (input instanceof HTMLInputElement || input instanceof HTMLSelectElement) {
          formData[element.name] = input.value;
        }
      });

      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
  
        if (response.ok) {
          console.log('User registered successfully!');
        } else {
          console.error('Failed to register user.');
        }
      } catch (error) {
        console.error('Error:', error);
      }

  
      validateForm(inputs, formData, form);
      
    });
  };
  