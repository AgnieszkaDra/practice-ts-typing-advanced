export type FormFieldBase = {
  category: string;
  label?: string;
  name: string;
  required?: boolean;
};
  
export type TextField = FormFieldBase & {
  type: 'text';
  placeholder?: string;
};
  
export type NumberField = FormFieldBase & {
  type: 'number';
  min?: number;
  max?: number;
  placeholder?: string;
};
  
export type SelectField = FormFieldBase & {
  type: 'select';
  options: { label: string; value: string | number }[];
};

export type EmailField = FormFieldBase & {
  type: 'email';
  placeholder?: string;
  //options: { label: string; value: string }[];
};

export type PasswordField = FormFieldBase & {
  type: 'password';
  placeholder?: string;
  //options: { label: string; value: string }[];
};

export type ButtonElement = FormFieldBase & {
  type: 'select';
  options: { label: string; value: string | number }[];
};
  
export type InputField = TextField | NumberField | SelectField | EmailField | PasswordField | ButtonElement;