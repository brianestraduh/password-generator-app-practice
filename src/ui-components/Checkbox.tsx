interface SliderProps {
  label: string;
}

export default function Checkbox({ label }: SliderProps) {
  return (
    <div className="checkbox-flex">
      <input type="checkbox" name={label} id={label} />
      <label htmlFor={label} className="body">
        {label}
      </label>
    </div>
  );
}
