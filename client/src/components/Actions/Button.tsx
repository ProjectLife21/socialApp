type TButton = {
  type: "submit" | "reset" | "button";
  text: string;
  classProps: string;
};

const Button = ({ type, text, classProps }: TButton) => {
  return (
    <button type={type} className={classProps}>
      {text}
    </button>
  );
};
export default Button;
