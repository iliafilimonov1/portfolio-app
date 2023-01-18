export type InputTypes = 'text' | 'number';

export interface InputProps {
  id: string;
  label?: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder: string;
  type: InputTypes;
  onClick: () => void;
}
