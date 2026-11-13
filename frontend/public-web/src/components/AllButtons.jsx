
import "./AllButtons.css";

const AllButtons = ({
  children,
  text,
  color,
  variant = "primary",
  size = "medium",
  href,
  type = "button",
  onClick,
  disabled = false,
  icon,
  iconPosition = "right",
  className = "",
  target,
  rel,
  ariaLabel,
  fullWidth = false,

}) => {
  const buttonClass = [
    "all-button",
    `all-button--${variant}`,
    `all-button--color${color}`,
    `all-button--${size}`,
    fullWidth ? "all-button--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="all-button__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      <span className="all-button__text">
        {children ?? text}
      </span>

      {icon && iconPosition === "right" && (
        <span className="all-button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={buttonClass}
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};

export default AllButtons;
