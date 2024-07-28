type TInputRow = {
  type: React.HTMLInputTypeAttribute;
  classProps?: string;
  placeholder?: string;
  label: string;
  name: string;
};

const InputRow = ({
  label,
  name,
  type,
  classProps,
  placeholder,
}: TInputRow) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="p-2 border-solid border-2 rounded-md"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
export default InputRow;
