import './FormInput.scss';

const FormInput = ({ id, label, value, ...inputProps }) => {
  const labelClassList = ["label"];
  if (value.length) labelClassList.push("shrink");

  return (
    <div className="FormInput">
      <label className={labelClassList.join(" ")} htmlFor={id}>{label}</label>
      <input
        className="textfield"
        id={id}
        value={value}
        { ...inputProps }
      />
    </div>
  );
};

export { FormInput };
