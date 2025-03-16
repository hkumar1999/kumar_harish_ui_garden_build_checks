// Dropdown.types.tsx
export interface DropdownProps {
  options: string[];
  disabled?: boolean;
  bgColor?: string;
  onChange?: (value: string) => void;
}
