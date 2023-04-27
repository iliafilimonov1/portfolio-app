import { ButtonProps } from '../Button/Button';

export type DropdownButton = ButtonProps & { id: string; label: string };

export interface DropdownProps {
  buttons: DropdownButton[];
  defaultButton?: DropdownButton;
}
