interface LoadingSpinnerProps {
  overlay?: boolean;
  className?: string;
}

export default function LoadingSpinner({
  overlay = false,
  className = "",
}: LoadingSpinnerProps) {
  const spinner = (
    <div
      className={`animate-spin rounded-full border-4 border-primary/30 border-t-primary ${className}`}
    />
  );

  if (!overlay) {
    return spinner;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white backdrop-blur-sm z-50">
      <div className="flex flex-col items-center gap-4">{spinner}</div>
    </div>
  );
}
