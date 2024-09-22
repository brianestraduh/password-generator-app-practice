import { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(50); // Initial value of the slider

  // Handler to update the value
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  // Calculate the percentage to update the background gradient
  const calculateProgress = () => {
    return ((value - 0) / (100 - 0)) * 100; // Assuming min is 0 and max is 100
  };

  return (
    <div>
      <div>
        <label htmlFor="slider">Character Length</label>
        <span>{value}</span>
      </div>
      <input
        type="range"
        id="slider"
        min="0"
        max="100"
        value={value}
        onChange={handleInputChange}
        style={{
          background: `linear-gradient(to right, var(--green) ${calculateProgress()}%, var(--black) ${calculateProgress()}%)`,
        }}
      />
    </div>
  );
};

export default Slider;
