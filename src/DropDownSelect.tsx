/**
 * @param value - selected value
 * @param onChange - func called whenever the value changes
 * @param options - list of options
 */

interface Option {
  value: string;
  name: string;
}

interface DropDownSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
}

const DropDownSelect = ({ value, onChange, options }: DropDownSelectProps) => (
  <select value={value} onChange={(e) => onChange(e.target.value)}>
    {options.map(({ value, name }) => (
      <option key={value} value={value}>
        {name}
      </option>
    ))}
  </select>
);

export default DropDownSelect;
