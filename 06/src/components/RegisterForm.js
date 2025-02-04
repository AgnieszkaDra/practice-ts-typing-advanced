"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterForm = void 0;
const createFields_1 = __importDefault(require("../utils/createFields"));
const submitForm_1 = require("../utils/submitForm");
const createWrapperForForm_1 = __importDefault(require("./createWrapperForForm"));
const RegisterForm = (inputs) => {
    const wrapper = (0, createWrapperForForm_1.default)(inputs, 'register');
    const filteredInputs = inputs.filter(input => input.category === 'register');
    filteredInputs.forEach(element => {
        const input = createFields_1.default.createFields(element);
        wrapper.appendChild(input);
    });
    const submitButton = document.createElement('button');
    submitButton.className = 'button';
    submitButton.type = 'submit';
    submitButton.textContent = 'Send';
    wrapper.appendChild(submitButton);
    (0, submitForm_1.submitForm)(wrapper, inputs, 'register');
    return wrapper;
};
exports.RegisterForm = RegisterForm;
exports.default = exports.RegisterForm;
