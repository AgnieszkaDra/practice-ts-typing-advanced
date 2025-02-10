import { createTextField, createNumberField, createSelectField } from './index.js';
const createInputForField = (field) => {
    switch (field.type) {
        case 'text':
            return createTextField(field);
        case 'number':
            return createNumberField(field);
        case 'select':
            return createSelectField(field);
        default:
            throw new Error(`Unsupported field type: ${field}`);
    }
};
export default createInputForField;
