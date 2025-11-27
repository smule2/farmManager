// src/components/atoms/IconButton.jsx
import React from 'react';

export default function IconButton({ children, className = '', ...props }) {
  return (
    <button
      className={`p-2 rounded-md hover:bg-gray-100 active:bg-gray-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
