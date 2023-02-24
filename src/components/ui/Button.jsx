import clsx from "clsx";

function Button({ children, className, ...props }) {
  const classes = clsx(
    "border border-current shadow-thick hover:shadow-less-thick transition",
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
