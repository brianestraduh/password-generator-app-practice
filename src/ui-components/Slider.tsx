import { useState } from "react";

export default function Slider() {
  const [value, setValue] = useState(50); // Initial value of the slider

  // Handler to update the value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(Number(e.target.value));
  };

  // Calculate the percentage to update the background gradient
  const calculateProgress = () => {
    return ((value - 0) / (25 - 0)) * 100; // Assuming min is 0 and max is 25
  };

  return (
    <div>
      <div className="space-between">
        <label htmlFor="slider" className="body">
          Character Length
        </label>
        <span className="heading-l green">{value}</span>
      </div>
      <input
        type="range"
        id="slider"
        min="0"
        max="25"
        value={value}
        onChange={handleInputChange}
        style={{
          background: `linear-gradient(to right, var(--green) ${calculateProgress()}%, var(--black) ${calculateProgress()}%)`,
        }}
      />
    </div>
  );
}
