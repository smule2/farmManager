// src/components/molecules/FormGroup.jsx
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

export default function FormGroup({
  label,
  error,
  children,
  className = '',
  ...props
}) {
  return (
    <div className={`mb-4 ${className}`}>
      {label && <Label>{label}</Label>}
      {children || <Input {...props} />}
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
