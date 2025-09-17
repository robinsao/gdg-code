export default function SimpleRadarChart() {
  return (
    <svg width="160" height="160" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#444"
        strokeWidth="1"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />
      <circle
        cx="60"
        cy="60"
        r="20"
        fill="none"
        stroke="#333"
        strokeWidth="1"
      />
      <line x1="60" y1="10" x2="60" y2="110" stroke="#333" strokeWidth="1" />
      <line x1="10" y1="60" x2="110" y2="60" stroke="#333" strokeWidth="1" />
      <circle cx="60" cy="60" r="4" fill="#3b82f6" />
    </svg>
  );
}
