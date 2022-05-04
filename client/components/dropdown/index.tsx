export default function Dropdown ({ label, value, options, onChange } : {label: string, value: string, option: string[] , onChange: Function}) {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };
  
  