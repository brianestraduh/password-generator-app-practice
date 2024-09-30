import Slider from "./ui-components/Slider";
import Checkbox from "./ui-components/Checkbox";
import StrengthIndicator from "./ui-components/StrengthIndicator";
import Button from "./ui-components/Button";
import InputPassword from "./ui-components/InputPassword";
function App() {
  return (
    <>
      <h1 className="heading-l">Password Generator App</h1>
      <InputPassword />
      <Slider />
      <Checkbox label="Include Uppercase Letters" />
      <Checkbox label="Include Lowercase Letters" />
      <Checkbox label="Include Numbers" />
      <Checkbox label="Include Symbols" />
      <StrengthIndicator strengthValue={3} />
      <Button />
    </>
  );
}

export default App;
