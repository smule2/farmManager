// src/components/atoms/AlertCard.jsx
import React from "react";
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";

export default function AlertCard({
  type = "info",
  message,
  className = "",
}) {
  const styles = {
    info: {
      icon: <Info size={16} className="text-blue-500" />,
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
    },
    warning: {
      icon: <AlertTriangle size={16} className="text-amber-500" />,
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
    },
    success: {
      icon: <CheckCircle size={16} className="text-green-500" />,
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
    },
    danger: {
      icon: <XCircle size={16} className="text-red-500" />,
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
    },
    neutral: {
      icon: <Info size={16} className="text-gray-500" />,
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-200",
    },
  };

  const style = styles[type] || styles.info;

  return (
    <div
      className={`flex items-center gap-2 p-3 rounded-lg border ${style.bg} ${style.text} ${style.border} ${className}`}
    >
      {style.icon}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
