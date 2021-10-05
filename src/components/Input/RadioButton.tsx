const RadioButton = ({
  onChange,
  name,
  value,
  defaultChecked = false,
  children,
}) => (
  <div>
    <input
      type="radio"
      id={value}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      defaultChecked={defaultChecked}
    />
    <label htmlFor={value}>{children}</label>
  </div>
);

export default RadioButton;
