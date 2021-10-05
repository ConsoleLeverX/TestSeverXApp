const Checkbox = ({ onChange, isChecked, name, children }) => (
  <div>
    <input
      type="checkbox"
      id={name}
      name={name}
      checked={isChecked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <label htmlFor={name}>{children}</label>
  </div>
);

export default Checkbox;
