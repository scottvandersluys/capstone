import './Button.scss';

const Button = ({ buttonClass, children, ...buttonProps }) => {
  const BUTTON_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
  }
  const classList = ["Button"];
  if (BUTTON_CLASSES?.[buttonClass]) classList.push(BUTTON_CLASSES[buttonClass])

  return (
    <button className={classList.join(" ")} { ...buttonProps }>
      {children}
    </button>
  );
};

export { Button };
