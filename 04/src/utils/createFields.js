"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inputs_1 = require("../ui/inputs");
const createFields = (field) => {
    switch (field.type) {
        case 'text':
            return (0, inputs_1.createTextField)(field);
        case 'number':
            return (0, inputs_1.createNumberField)(field);
        case 'select':
            return (0, inputs_1.createSelectField)(field);
        case 'email':
            return (0, inputs_1.createEmailField)(field);
        case 'password':
            return (0, inputs_1.createPasswordField)(field);
        default:
            throw new Error(`Unsupported field type: ${field.type}`);
    }
};
exports.default = {
    createTextField: inputs_1.createTextField,
    createNumberField: inputs_1.createNumberField,
    createSelectField: inputs_1.createSelectField,
    createFields,
};
