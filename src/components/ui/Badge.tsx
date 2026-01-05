import React from "react";

interface BadgeProps {
  text: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string; // Allow extra styling if needed
}

const Badge: React.FC<BadgeProps> = ({
  text,
  textColor = "text-white/90",
  bgColor = "bg-white/20",
  borderColor = "border-transparent",
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-md text-[0.7rem] font-medium border ${textColor} ${bgColor} ${borderColor} ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
