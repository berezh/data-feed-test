export interface FieldData {
  touched: boolean;
  validating: boolean;
  errors: string[];
  warnings: string[];
  name: string;
  validated: boolean;
  value?: any;
}
