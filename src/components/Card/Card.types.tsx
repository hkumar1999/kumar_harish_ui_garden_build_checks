// Card.types.tsx
export interface CardProps {
  children: React.ReactNode;
  disabled?: boolean;
  bgColor?: string;
  imgSrc?: string; //  Image path is now a string prop
}
