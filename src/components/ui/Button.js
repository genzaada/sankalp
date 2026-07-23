"use client";

import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  href = "",
  target = "",
  ...props
}) {
  const baseClass = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass} {...props}>
      {children}
    </button>
  );
}
