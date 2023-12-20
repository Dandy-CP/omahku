import React, { forwardRef } from "react";
import clsx from "clsx";

interface IButtonProps {
  variant?: "default" | "outline" | "plain";
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButtonProps;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type = "button",
    className,
    children,
    variant = "default",
    ...rest
  } = props;

  const variantOptions = {
    default: clsx(
      `w-[100px] h-[48px] bg-primary text-white rounded-lg hover:bg-blue-500`,
      className
    ),
    outline: clsx(
      `w-[100px] h-[48px] bg-white border border-primary rounded-lg`,
      className
    ),
    plain: clsx("w-[100px] h-[48px]", className),
  };

  return (
    <button ref={ref} className={`${variantOptions[variant]}`} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
