import React, { forwardRef } from "react";
import clsx from "clsx";

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Container = forwardRef<Ref, DivProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const classNameValue = clsx("mx-20 laptop:mx-5 tablet:mx-5", className);

  return (
    <div ref={ref} className={classNameValue} {...rest}>
      {children}
    </div>
  );
});

Container.displayName = "Container";
export default Container;
