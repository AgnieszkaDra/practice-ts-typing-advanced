
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

console.log("Hello, TypeScriptffff!");

// import express from 'express';
// import path from 'path';

// const app = express();
// const __dirname = path.resolve();

// // Serve static files from the public folder
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'dist')));

// // Serve the index.html file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// const PORT = 3050;
// app.listen(PORT, () => {
// //   console.log(`Server running at http://localhost:${PORT}`);
// // });

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const app = express();

// // Resolve __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Serve static files from the public folder
// app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../dist')));

// // Serve the index.html file
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// const PORT = 3050;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// fetch("http://localhost:3010/data")
//   .then((response) => response.json())
//   .then((data) => {
//     const formFields: InputField[] = [
//       {
//         name: "name",
//         label: "Name",
//         value: data[0].name,
//         type: "text",
//         category: "input",
//       },
//       {
//         name: "surname",
//         label: "Surname",
//         value: data[0].surname,
//         type: "text",
//         category: "input",
//       },
//       {
//         name: "dateOfBirth",
//         label: "Date of Birth",
//         value: data[0].dateOfBirth,
//         type: "number",
//         category: "input",
//         min: 0,
//       },
//       {
//         name: "login",
//         label: "Login",
//         value: data[0].login,
//         type: "text",
//         category: "input",
//       },
//       {
//         name: "email",
//         label: "Email",
//         value: data[0].email,
//         type: "email",
//         category: "input",
//       },
//       {
//         name: "password",
//         label: "Password",
//         value: data[0].password,
//         type: "password",
//         category: "input",
//       },
//     ];

//   //  const form = FormComponent(formFields);
//   //   const appElement = document.getElementById('app');
//   //   if (appElement) {
//   //     appElement.appendChild(form);
//   //   } else {
//   //     console.error("Error: 'app' element not found.");
//   //   }
//   })
//   .catch((err) => console.error("Error fetching data:", err));
  
  
