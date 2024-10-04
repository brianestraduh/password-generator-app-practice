import Slider from "./ui-components/Slider";
import Checkbox from "./ui-components/Checkbox";
import StrengthIndicator from "./ui-components/StrengthIndicator";
import Button from "./ui-components/Button";
import generatePassword from "./helper/password-gen";

import GeneratedPassword from "./ui-components/GeneratedPassword";
import { useState } from "react";
type StrengthLevel = 0 | 1 | 2 | 3;
function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [charLength, setCharLength] = useState(12);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [strength, setStrength] = useState<StrengthLevel>(0);
  const [passCopied, setpassCopied] = useState<boolean>(false);

  const handleUpperChange = () => {
    setUppercase(!uppercase);
  };

  const handleLowerChange = () => {
    setLowercase(!lowercase);
  };

  const handleNumberChange = () => {
    setNumbers(!numbers);
  };

  const handleSymbolChange = () => {
    setSymbols(!symbols);
  };

  const handleGeneratePassword = () => {
    setpassCopied(false);
    setGeneratedPassword("");
    const password = generatePassword(
      charLength,
      uppercase,
      lowercase,
      numbers,
      symbols
    );
    setGeneratedPassword(password.password);
    setStrength(password.strength);
  };
  const handleSliderChange = (value: number) => {
    setCharLength(value);
  };

  const handleCopyClipboard = () => {
    navigator.clipboard
      .writeText(generatedPassword)
      .then(() => {
        setpassCopied(!passCopied);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <h1 className="heading-l">Password Generator App</h1>
      <div className="pass-main-container">
        <div className="gen-pass-main-container">
          <GeneratedPassword
            password={generatedPassword}
            onClick={handleCopyClipboard}
            copied={passCopied}
          />
        </div>
        <div className="gen-pass-sec-container">
          <Slider onChange={handleSliderChange} />
          <div className="checkbox-container">
            <Checkbox
              label="Include Uppercase Letters"
              onChange={handleUpperChange}
            />
            <Checkbox
              label="Include Lowercase Letters"
              onChange={handleLowerChange}
            />
            <Checkbox label="Include Numbers" onChange={handleNumberChange} />
            <Checkbox label="Include Symbols" onChange={handleSymbolChange} />
          </div>
          <StrengthIndicator strengthValue={strength} />
          <Button onClick={handleGeneratePassword} />
        </div>
      </div>
    </>
  );
}

export default App;
