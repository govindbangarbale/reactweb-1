import React, { useState } from "react";

export default function KycSteps() {
    let arr = [
        { title: "KYC", subtitle: "Details Pending" },
        { title: "KYC", subtitle: "Under Review" },
        { title: "KYC", subtitle: "Cleared" },
        { title: "Subscription", subtitle: "Agreement Pending" },
        { title: "Subscription", subtitle: "Agreement Under Review" },
        { title: "Platform access", subtitle: "Granted" },
    ];
    const [active] = useState(0);
    return (
        <div className="flex flex-row justify-between px-3">
            <div className="py-3">
                <div className="text-2xl">
                    <span className="font-bold">ONBOARDING - KYC </span>DETAILS
                </div>
                <div className="text-sm text-grey-600">Please fill in requied infomation fo the onboarding process</div>
            </div>
            <div className="flex flex-row">
                {arr.map((e, index) => (
                    <Steps index={index} stepData={e} active={active} totalSteps={arr.length} key={index} />
                ))}
            </div>
        </div>
    );
}

function Steps(props) {
    let { index, stepData, active, totalSteps } = props;
    return (
        <div className="relative pt-4 font-bold w-54">
            <div className={`absolute top-0 w-11/12 h-full transform -translate-x-1/2 ${index === active ? "bg-teal-300" : ""} bg-opacity-20 left-1/2`}>{/* highlight */}</div>
            <div className="relative z-[1] flex flex-col justify-center">
                <div className={`flex flex-col items-center px-5 border-grey-300 border-0 border-l ${index === totalSteps - 1 ? "border-r" : ""}`}>
                    <div>{stepData.title}</div>
                    <div>{stepData.subtitle}</div>
                </div>
                <ul className="relative w-full mt-3 mb-4">
                    <li className="h-[3px] bg-teal-500"></li>
                    <li className="absolute w-6 h-6 transform -translate-x-3 -translate-y-3 bg-teal-300 rounded-full bg-opacity-20 top-1/2 left-1/2"></li>
                    <li className="absolute w-2 h-2 transform -translate-x-1 -translate-y-1 bg-teal-500 rounded-full top-1/2 left-1/2"></li>
                </ul>
            </div>
        </div>
    );
}
