interface SliderProps {
  label: string;
  onChange: () => void;
}

export default function Checkbox({ label, onChange }: SliderProps) {
  return (
    <div className="checkbox-flex">
      <input type="checkbox" name={label} id={label} onChange={onChange} />
      <label htmlFor={label} className="body checkbox-text">
        {label}
      </label>
    </div>
  );
}
