"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWrapperForForm = void 0;
const createWrapperForForm = (inputs, className) => {
    const form = document.createElement('form');
    form.className = 'form';
    form.setAttribute("novalidate", "");
    form.classList.add(`form--${className}`);
    // inputs.forEach(element => {
    //   const input = createFields.createFields(element);
    //   form.appendChild(input);
    // });
    return form;
};
exports.createWrapperForForm = createWrapperForForm;
exports.default = exports.createWrapperForForm;
