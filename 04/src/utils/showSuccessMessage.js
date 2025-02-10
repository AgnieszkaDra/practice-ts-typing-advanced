"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const showSuccessMessage = (form) => {
    const successMessage = document.createElement("div");
    successMessage.className = "success-message";
    successMessage.textContent = "Form is sent successfully!";
    form.appendChild(successMessage);
};
exports.default = showSuccessMessage;
