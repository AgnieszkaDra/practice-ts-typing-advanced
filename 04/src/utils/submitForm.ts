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

type User = { id: string, name: string, day:string, month:string, year:string, email:string, password:string };
 async function request<T>(
  url: string,
  options? : RequestInit
): Promise<T> {

   const resp = await fetch(url, options);
   if(!resp.ok) throw new Error(`Error: ${resp.status}`);
   return await resp.json();
 }
 
 (async () => { 
  const url = 'http://localhost:5000/users';
  const body = formData;
   try {
       const data = await request<User>(
        url,
        {
          method: 'POST',
          body: JSON.stringify(body)
        }
      );
       console.log(data);
   } catch(err) {
       if(err instanceof Error) {
           console.error(err.message)
       }
       console.error(err)
   };
 })();

 validateForm(inputs, formData, form);

  });
}