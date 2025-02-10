"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
const showErrorMessage_1 = __importDefault(require("./showErrorMessage"));
const showSuccessMessage_1 = __importDefault(require("./showSuccessMessage"));
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}
const validateForm = async (fields, formData, formElement) => {
    const errors = [];
    for (const field of fields) {
        const value = formData[field.name];
        const previousErrors = formElement.querySelectorAll(`.error-message[id="${field.name}-error"]`);
        previousErrors.forEach((error) => error.remove());
        const existingMessage = formElement.querySelector(".success-message");
        if (existingMessage) {
            existingMessage.remove();
        }
        if (field.required && (value === undefined || value === '')) {
            errors.push(`${field.label} is required.`);
            (0, showErrorMessage_1.default)(formElement, field.name, `${field.label} is required.`);
        }
        if (field.type === 'number') {
            const numValue = Number(value);
            if (field.min !== undefined && numValue < field.min) {
                errors.push(`${field.label} must be at least ${field.min}.`);
                (0, showErrorMessage_1.default)(formElement, field.name, `${field.label} must be at least ${field.min}.`);
            }
            if (field.max !== undefined && numValue > field.max) {
                errors.push(`${field.label} must be less than ${field.max}.`);
                (0, showErrorMessage_1.default)(formElement, field.name, `${field.label} must be less than ${field.max}.`);
            }
        }
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                errors.push(`${field.label} is required.`);
                (0, showErrorMessage_1.default)(formElement, field.name, `${field.label} is required.`);
            }
            else if (!emailRegex.test(String(value))) {
                errors.push(`Please enter a valid email address.`);
                (0, showErrorMessage_1.default)(formElement, field.name, `Please enter a valid email address.`);
            }
        }
        if (field.type === 'password') {
            const password = String(value);
            if (!password) {
                errors.push(`${field.label} is required.`);
                (0, showErrorMessage_1.default)(formElement, field.name, `${field.label} is required.`);
            }
            else {
                const hashedPassword = await hashPassword(password);
                console.log("Hashed Password:", hashedPassword);
            }
        }
    }
    if (errors.length > 0) {
        console.error("Form validation errors:", errors);
    }
    else {
        (0, showSuccessMessage_1.default)(formElement);
    }
    return errors;
};
exports.validateForm = validateForm;
exports.default = exports.validateForm;
