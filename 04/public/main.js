import FormComponent from '../src/components/FormComponent.js';

fetch("http://localhost:3050/data") // Fetch data from your express API
  .then((response) => response.json())
  .then((data) => {
    const formFields = [
      {
        name: "name",
        label: "Name",
        value: data[0].name,
        type: "text",
        category: "input",
      },
      {
        name: "surname",
        label: "Surname",
        value: data[0].surname,
        type: "text",
        category: "input",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        value: data[0].dateOfBirth,
        type: "number",
        category: "input",
        min: 0,
      },
      {
        name: "login",
        label: "Login",
        value: data[0].login,
        type: "text",
        category: "input",
      },
      {
        name: "email",
        label: "Email",
        value: data[0].email,
        type: "email",
        category: "input",
      },
      {
        name: "password",
        label: "Password",
        value: data[0].password,
        type: "password",
        category: "input",
      },
    ];

    const form = FormComponent(formFields);

    const appElement = document.getElementById('app');
    if (appElement) {
      appElement.appendChild(form);
    } else {
      console.error("Error: 'app' element not found.");
    }
  })
  .catch((err) => console.error("Error fetching data:", err));