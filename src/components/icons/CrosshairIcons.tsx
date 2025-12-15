import React from "react";

export const CrosshairDark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="100" cy="100" r="8" fill="#FFFFFF" />
    <path d="M100 30V70" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M100 130V170" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M30 100H70" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M170 100H130" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M58 60H80" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M58 140H80" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M120 60H142" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M120 140H142" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M60 60V80" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M60 120V140" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M140 60V80" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M140 120V140" stroke="#FFFFFF" strokeWidth="4" />
  </svg>
);

export const CrosshairLight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="100" cy="100" r="8" fill="#000000" />
    <path d="M100 30V70" stroke="#000000" strokeWidth="4" />
    <path d="M100 130V170" stroke="#000000" strokeWidth="4" />
    <path d="M30 100H70" stroke="#000000" strokeWidth="4" />
    <path d="M170 100H130" stroke="#000000" strokeWidth="4" />
    <path d="M58 60H80" stroke="#000000" strokeWidth="4" />
    <path d="M58 140H80" stroke="#000000" strokeWidth="4" />
    <path d="M120 60H142" stroke="#000000" strokeWidth="4" />
    <path d="M120 140H142" stroke="#000000" strokeWidth="4" />
    <path d="M60 60V80" stroke="#000000" strokeWidth="4" />
    <path d="M60 120V140" stroke="#000000" strokeWidth="4" />
    <path d="M140 60V80" stroke="#000000" strokeWidth="4" />
    <path d="M140 120V140" stroke="#000000" strokeWidth="4" />
  </svg>
);
