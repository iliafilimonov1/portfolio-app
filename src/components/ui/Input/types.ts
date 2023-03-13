export interface InputProps {
  id?: string;
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  onClick?: () => void;
  error?: string;
  postfix?: React.ReactNode;
}
