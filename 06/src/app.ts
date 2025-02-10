import  RegisterForm  from './components/RegisterForm.js';
import  LoginForm  from './components/LoginForm.js';
import formFields from './fields/formFields.js';
import './style.css';

const formContainer = document.createElement('div');
formContainer.className = 'form-container';

const switchContainer = document.createElement('div');
switchContainer.className = 'switch-container';

const registerButton = document.createElement('button');
registerButton.textContent = 'Register';
registerButton.className = 'switch-button';

const loginButton = document.createElement('button');
loginButton.textContent = 'Login';
loginButton.className = 'switch-button';

switchContainer.appendChild(registerButton);
switchContainer.appendChild(loginButton);

const renderForm = (formType: 'register' | 'login') => {
 
    formContainer.innerHTML = '';

    if (formType === 'register') {
        const registerForm = RegisterForm(formFields);
        registerForm.classList.add('form--register', 'active');
        formContainer.appendChild(registerForm);
    } else if (formType === 'login') {
        const loginForm = LoginForm(formFields);
        loginForm.classList.add('form--login', 'active');
        formContainer.appendChild(loginForm);
    }
};

renderForm('register');

registerButton.addEventListener('click', () => renderForm('register'));
loginButton.addEventListener('click', () => renderForm('login'));

const root = document.querySelector('#root');
if (root) {
    root.appendChild(formContainer);
    root.appendChild(switchContainer);
} else {
    console.error('Root element not found');
}




