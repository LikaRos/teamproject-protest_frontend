import React from 'react';

const GlobeButton = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6_96)">
        <path
          d="M23.8535 11.6464L16.3535 4.14644C16.1582 3.95111 15.8418 3.95111 15.6465 4.14644C15.4512 4.34176 15.4512 4.65817 15.6465 4.85345L22.293 11.5H0.500016C0.223641 11.5 0 11.7236 0 12C0 12.2763 0.223641 12.5 0.500016 12.5H22.293L15.6465 19.1464C15.4512 19.3418 15.4512 19.6582 15.6465 19.8534C15.7441 19.9511 15.8721 19.9999 16 19.9999C16.128 19.9999 16.2559 19.9511 16.3536 19.8534L23.8536 12.3534C24.0488 12.1582 24.0488 11.8418 23.8535 11.6464Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_96">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobeButton;
