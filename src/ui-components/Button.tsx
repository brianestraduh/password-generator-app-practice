interface ButtonProps {
  onClick: () => void;
}
export default function Button({ onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="generate-btn body">
      GENERATE ➔
    </button>
  );
}
