import React from "react";

export default function Header() {
  return (
    <header className="flex items-center mb-8">
      <div className="flex items-center mr-6">
        <span className="logo rounded-full bg-orange-500 flex items-center justify-center w-10 h-10 mr-3">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8 4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8z"
              fill="#fff"
            />
            <circle cx="12" cy="12" r="5" fill="#fff" opacity=".2" />
          </svg>
        </span>
        <span className="text-2xl font-bold text-white">OptiMine</span>
      </div>
      <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
    </header>
  );
}
