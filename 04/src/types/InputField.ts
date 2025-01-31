// Base field type
export type FormFieldBase = {
    category: 'input';
    label: string;
    name: string;
    required?: boolean;
    value?: string; // Allow `number` for fields like "Date of Birth"
  };
  
  // Text field type
  export type TextField = FormFieldBase & {
    type: 'text' | 'email' | 'password'; // Add support for `email` and `password` types
    placeholder?: string;
  };
  
  // Number field type
  export type NumberField = FormFieldBase & {
    type: 'number';
    min?: number;
    max?: number;
  };
  
  // Select field type
  export type SelectField = FormFieldBase & {
    type: 'select';
    options: { label: string; value: string | number }[];
  };
  
  // Combined input field type
  export type InputField = TextField | NumberField | SelectField;