import { createTextField, createNumberField, createSelectField, createEmailField, createPasswordField } from '../ui/inputs/index.js';
const createFields = (field) => {
    switch (field.type) {
        case 'text':
            return createTextField(field);
        case 'number':
            return createNumberField(field);
        case 'select':
            return createSelectField(field);
        case 'email':
            return createEmailField(field);
        case 'password':
            return createPasswordField(field);
        default:
            throw new Error(`Unsupported field type: ${field.type}`);
    }
};
export default {
    createTextField,
    createNumberField,
    createSelectField,
    createFields,
};
