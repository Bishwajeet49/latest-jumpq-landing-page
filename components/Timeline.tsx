import Image from "next/image";
import FastIcon from "./FastIcon";
import SafeIcon from "./Safe";

const Timeline = () => {
    return (
        <div className="relative max-w-5xl mx-auto pt-10" >
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full border-l-2 divide-gray-100"></div>

            {/* Real Time Location */}
            <div className="relative flex gap-12 items-center mb-6">
                {/* Icon */}
                <div className="h-6 w-6 p-3 ml-2 bg-blue-800 rounded-full"></div>
                <div className="flex responsive-flex items-center bg-white shadow-lg rounded-2xl gap-3 p-3">
                    <div className="flex h-10 w-12 gap-4 bg-blue-800 rounded border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-white dark:text-gray-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                        </svg>
                    </div>

                    {/* Card */}
                    <div className="text-white w-full">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Import leads</h3>
                    </div>
                </div>
            </div>

            {/* The Faster on the Market */}
            <div className="relative flex gap-12 items-center mb-6">
                {/* Icon */}
                <div className="h-6 w-6 p-3 ml-2 bg-gray-500 rounded-full"></div>
                <div className="flex responsive-flex items-center bg-white shadow-lg rounded-2xl gap-3 p-3">
                    <div className="flex h-10 w-12 gap-4 bg-gray-500 rounded border border-gray-200 dark:border-gray-900">
                        {/* <FastIcon /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-white dark:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                        </svg>
                    </div>

                    {/* Card */}
                    <div className="text-white w-full">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">JumpQ On</h3>
                    </div>
                </div>
            </div>

            {/* Safe and Private */}
            <div className="relative flex gap-12 items-center mb-6">
                <div className="h-6 w-6 p-3 ml-2 bg-purple-500 rounded-full"></div>
                {/* Icon */}
                <div className="flex flex-col bg-white shadow-lg rounded-2xl gap-3 p-3">
                    <div className="flex responsive-flex gap-3 items-center">
                        <div className="flex h-10 w-10 gap-4 bg-purple-500 rounded border border-gray-200 dark:border-gray-900">
                            {/* <SafeIcon /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="m-auto h-6 w-6 text-white dark:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"></path>
                            </svg>
                        </div>

                        {/* Card with Image */}
                        <div className="text-white w-full">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Walk-in</h3>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="/images/milestone-dark2.webp" // Place this image in the public folder
                            alt="Walk-in"
                            width={370}
                            height={200}
                            className="w-full object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Timeline;