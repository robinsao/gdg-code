import React from "react";

export default function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  const { color, ...rest } = props.style!;
  return (
    <svg viewBox="0 0 24 24" fill="none" width={28} height={28} style={rest}>
      <path
        d="M12 2C7.58 2 4 5.58 4 10c0 4.42 4.13 9.19 7.13 12.32a1.5 1.5 0 0 0 2.13 0C15.87 19.19 20 14.42 20 10c0-4.42-3.58-8-8-8z"
        fill={color}
      />
      <circle cx="12" cy="10" r="3.5" fill="#fff" />
    </svg>
  );
}
