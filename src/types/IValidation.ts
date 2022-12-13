export interface IValidation {
  email: boolean;
  isEmpty: boolean;
  minLength: number;
  maxLength: number;
  equal?: string;
}
