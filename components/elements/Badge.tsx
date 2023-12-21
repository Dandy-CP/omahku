import React, { forwardRef } from "react";
import clsx from "clsx";

interface IBadgeProps {
  label: string;
  variant?: "default" | "white";
}

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  IBadgeProps;

const Badge = forwardRef<Ref, DivProps>((props, ref) => {
  const { label, variant = "default", className, ...rest } = props;

  const variantOptions = {
    default: clsx(
      "bg-secondary rounded-full text-sm w-48 h-10 flex items-center justify-center",
      className
    ),
    white: clsx(
      "bg-white rounded-full text-sm w-48 h-10 flex items-center justify-center",
      className
    ),
  };

  return (
    <div ref={ref} className={variantOptions[variant]} {...rest}>
      {label}
    </div>
  );
});

Badge.displayName = "Badge";
export default Badge;
