import React from 'react';

const SafeIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="m-auto h-6 w-6 text-gray-700 dark:text-gray-300"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21q-4.5-1-7.5-4.5T2 12V6l10-4 10 4v6q0 4.5-3 8T12 21ZM12 20q3.5-1 5.75-4.25T20 12V7L12 4 4 7v5q0 3.5 2.25 6.75T12 20ZM12 12Z"
            />
        </svg>
    );
};

export default SafeIcon;
