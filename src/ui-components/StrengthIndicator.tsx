interface StrengthIndicatorProps {
  strengthValue: 0 | 1 | 2 | 3;
}
const strengthStylingArr = ["too-weak", "weak", "medium", "strong"];
const strengthRankArr = ["TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
export default function StrengthIndicator({
  strengthValue,
}: StrengthIndicatorProps) {
  return (
    <div className="strength-container">
      <span className="body grey-text">STRENGTH</span>
      <div className="stren-indicator-container">
        <span className="heading-m white-text">
          {strengthRankArr[strengthValue]}
        </span>

        <div
          className={`color-bars-container ${strengthStylingArr[strengthValue]}`}
        >
          <div className="indicator" />
          <div className="indicator" />
          <div className="indicator" />
          <div className="indicator" />
        </div>
      </div>
    </div>
  );
}
