// src/components/atoms/Heading.jsx
import React from 'react';

export default function Heading({ level = 2, children, className = '' }) {
  const Tag = `h${level}`;
  const sizes = {
    1: 'text-2xl',
    2: 'text-xl',
    3: 'text-lg'
  };

  return (
    <Tag className={`${sizes[level] || 'text-lg'} font-semibold ${className}`}>
      {children}
    </Tag>
  );
}
