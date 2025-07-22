interface ButtonProps {
  variant?: "primary" | "outline" | "destructive";
}

export const Button = ({ variant = "primary" }: ButtonProps) => {
  return <button type="button">Este es un botón</button>;
};