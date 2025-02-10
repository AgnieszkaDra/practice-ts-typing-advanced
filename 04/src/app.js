"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RegisterForm_1 = require("./components/RegisterForm");
const LoginForm_1 = require("./components/LoginForm");
const formFields_1 = __importDefault(require("./fields/formFields"));
require("./style.css");
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
const renderForm = (formType) => {
    formContainer.innerHTML = '';
    if (formType === 'register') {
        const registerForm = (0, RegisterForm_1.RegisterForm)(formFields_1.default);
        registerForm.classList.add('form--register', 'active');
        formContainer.appendChild(registerForm);
    }
    else if (formType === 'login') {
        const loginForm = (0, LoginForm_1.LoginForm)(formFields_1.default);
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
}
else {
    console.error('Root element not found');
}
