import React from "react";

export function KycSection(props) {
    return (
        <div className="relative pt-4 pl-8 font-bold w-54">
            <div className="absolute left-0 w-4 h-full">
                <div className="absolute h-full w-[2px] bg-grey-500 left-1/2 transform translate-x-[-1px] top-1"></div>
                <div className="relative w-4 h-4 bg-opacity-100 rounded-full bg-grey-500 top-1"></div>
            </div>
            <div className="px-2">{props.children}</div>
        </div>
    );
}
