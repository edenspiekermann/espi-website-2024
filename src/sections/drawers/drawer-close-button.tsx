import React from "react";

export const DrawerCloseButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle opacity="0.3" cx="20" cy="20" r="20" fill="#D9D9D9" />
      <mask
        id="mask0_2739_27174"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="24"
        height="24"
      >
        <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2739_27174)">
        <path d="M13 21H19H21H27V19H21H19H13V21Z" fill="white" />
      </g>
    </svg>
  );
};
