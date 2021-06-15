import React, { useState } from "react";
import { useOuterClick } from "../../../../hooks/out_of_bounds_click_detect";

export default function Account() {
    const [accountToggle, setaccountToggle] = useState(false);
    const innerRef = useOuterClick((e) => {
        if (accountToggle) {
            setaccountToggle(false);
        }
    });
    return (
        <div className="relative inline-block text-left" ref={innerRef}>
            <span className="rounded-md shadow-sm">
                <button className="inline-flex items-center justify-center w-full px-4 py-1 text-sm transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-grey-700 hover:text-blue-grey-900 focus:outline-none focus:text-blue-grey-900 focus:border-blue-grey-100 hover:border-blue-grey-100 focus:bg-blue-grey-50 focus:shadow-outline-blue hover:bg-blue-grey-50" onClick={() => setaccountToggle(!accountToggle)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M15 2H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM9 4.75c1.24 0 2.25 1.01 2.25 2.25S10.24 9.25 9 9.25 6.75 8.24 6.75 7 7.76 4.75 9 4.75zM13.5 14h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V14z" />
                    </svg>
                    <span>User</span>
                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>
            </span>
            <div className={`transform opacity-0 invisible -translate-y-2 scale-95 ${accountToggle ? "opacity-100 visible translate-y-0 scale-100" : ""} transition-all duration-300  origin-top-right`}>
                <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border divide-y rounded-md shadow-lg outline-none border-grey-200 divide-grey-100">
                    <div className="px-4 py-3">
                        <p className="text-sm leading-5">Signed in as</p>
                        <p className="text-sm font-medium leading-5 truncate text-grey-900">tom@example.com</p>
                    </div>
                    <div className="py-1">
                        <a href="!#" tabIndex="0" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-grey-700">
                            Account settings
                        </a>
                        <a href="!#" tabIndex="1" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-grey-700">
                            Support
                        </a>
                        <span tabIndex="-1" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left opacity-50 cursor-not-allowed text-grey-700">
                            New feature (soon)
                        </span>
                        <a href="!#" tabIndex="2" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-grey-700">
                            License
                        </a>
                    </div>
                    <div className="py-1">
                        <a href="!#" tabIndex="3" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-grey-700">
                            Sign out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
