import clsx from "clsx";

function Skeleton({ times, className }) {
  const outerClassNames = clsx(
    "relative",
    "overflow-hidden",
    "bg-slate-500",
    "rounded",
    "mb-2.5",
    "mt-2",
    className
  );
  const innerClassNames = clsx(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-slate-500",
    "via-slate-300",
    "to-slate-500"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
