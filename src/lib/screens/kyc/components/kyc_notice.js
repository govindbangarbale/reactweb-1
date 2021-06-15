import React from "react";

export function KycNotice(props) {
    return (
        <div className="flex flex-row px-6 py-2 text-lg italic font-light border rounded-lg bg-grey-50 border-blue-grey-50">
            <div className="">Note:</div>
            <div className="ml-2">{props.children}</div>
        </div>
    );
}
