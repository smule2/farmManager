// src/components/atoms/Divider.jsx
import React from 'react';

export default function Divider({ className = '' }) {
  return <hr className={`border-gray-200 my-4 ${className}`} />;
}
