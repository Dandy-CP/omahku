import React, { forwardRef } from "react";
import clsx from "clsx";

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Skeleton = forwardRef<Ref, DivProps>((props, ref) => {
  const { className, ...rest } = props;

  return (
    <div ref={ref} className="animate-pulse">
      <div
        className={clsx(`bg-slate-300 w-80 h-80 rounded-md`, className)}
        {...rest}
      />
    </div>
  );
});

Skeleton.displayName = "Skeleton";
export default Skeleton;
