import React, { forwardRef } from "react";
import clsx from "clsx";

interface ICardProps {
  withShadow?: boolean;
}

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ICardProps;

const Card = forwardRef<Ref, DivProps>((props, ref) => {
  const { withShadow = false, children, className, ...rest } = props;

  const classNameValue = clsx(
    `h-auto ${
      withShadow ? "shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : "shadow-none"
    }`,
    className
  );

  return (
    <div ref={ref} className={classNameValue} {...rest}>
      {children}
    </div>
  );
});

Card.displayName = "Card";
export default Card;
