import React from "react";

export default function Card({ children, className = "", hoverable = true, ...props }) {
  return (
    <div
      className={`glass-card ${hoverable ? "glass-card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
