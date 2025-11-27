export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 select-none">
      <span className="block animate-bounce text-3xl opacity-70 dark:opacity-80">↓</span>
    </div>
  );
}
