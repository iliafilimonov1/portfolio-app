import { ButtonProps } from '../Button/Button';

export type DropdownButton = ButtonProps & { id: string };

export interface DropdownProps {
  buttons: DropdownButton;
}
