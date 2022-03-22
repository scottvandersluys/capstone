import './FormInput.scss';

const FormInput = ({ label, name, value, ...inputProps }) => {
  const labelClassList = ["form-input-label"];
  if (value.length) labelClassList.push("shrink");

  return (
    <div className="FormInput">
      <label className={labelClassList.join(" ")} htmlFor={name}>{label}</label>
      <input
        className="form-input-textfield"
        id={name}
        name={name}
        value={value}
        { ...inputProps }
      />
    </div>
  );
};

export { FormInput };
