import React from 'react';

const Alert = ({ type, message, show, onClose }) => {
  if (!show) return null;

  const alertStyles = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
  };

  return (
    <div
      className={`border-l-4 p-4 mb-4 ${alertStyles[type]} relative`}
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
      <span
        className="absolute top-0 bottom-0 right-0 px-4 py-3"
        onClick={onClose}
      >
        <svg
          className="fill-current h-6 w-6 text-gray-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 5.652a1 1 0 010 1.414L11.414 10l2.934 2.934a1 1 0 01-1.414 1.414L10 11.414l-2.934 2.934a1 1 0 01-1.414-1.414L8.586 10 5.652 7.066a1 1 0 011.414-1.414L10 8.586l2.934-2.934a1 1 0 011.414 0z" />
        </svg>
      </span>
    </div>
  );
};

export default Alert;

