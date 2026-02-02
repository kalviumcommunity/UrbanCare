interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const style =
    variant === "primary"
      ? { background: "#2563eb", color: "white" }
      : { background: "#e5e7eb", color: "#111827" };

  return (
    <button
      onClick={onClick}
      style={{ padding: "8px 14px", borderRadius: "6px", ...style }}
    >
      {label}
    </button>
  );
}