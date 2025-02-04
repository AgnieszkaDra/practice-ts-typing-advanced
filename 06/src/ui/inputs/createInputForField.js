"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const createInputForField = (field) => {
    switch (field.type) {
        case 'text':
            return (0, index_1.createTextField)(field);
        case 'number':
            return (0, index_1.createNumberField)(field);
        case 'select':
            return (0, index_1.createSelectField)(field);
        default:
            throw new Error(`Unsupported field type: ${field}`);
    }
};
exports.default = createInputForField;
