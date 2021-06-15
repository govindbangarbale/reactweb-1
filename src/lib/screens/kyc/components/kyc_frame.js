import React, { useState, useEffect } from "react";

import Navigation from "./navigation/navigation";
import KycSteps from "./kyc_steps";

export default function KycFrame(props, children) {
    let { toggles = [] } = props;

    const [activeScreenIndex, setactiveScreenIndex] = useState(0);
    const [activeScreen, setactiveScreen] = useState(null);

    function setActiveScreen(index) {
        return () => {
            console.log("dasdas");
            if (activeScreenIndex !== index) {
                setactiveScreenIndex(index);
            }
        };
    }

    useEffect(() => {
        setactiveScreen(toggles[activeScreenIndex].screen);
    }, [toggles, activeScreenIndex]);

    return (
        <div className="relative flex flex-row h-full">
            <div className="w-64 h-full bg-teal-300">
                <img src="https://dummyimage.com/300x80/000/fff&text=testing" className="m-auto mt-3 w-36" alt="Logo" />
            </div>
            <div className="w-full">
                <Navigation />
                <KycSteps />
                <div className="absolute left-0 z-10 flex flex-row w-full min-h-[480px]">
                    <div className="absolute z-10 flex flex-col items-end w-56 pt-10 space-y-20">
                        {toggles.map((e, index) => (
                            <KycFrameActiveStepToggle toggleData={e} isActive={activeScreenIndex === index} key={index} handleToggleSelection={setActiveScreen(index)}></KycFrameActiveStepToggle>
                        ))}
                    </div>
                    <div className="absolute right-0 w-11/12 h-full pl-6">
                        <div className="w-full h-full p-12 bg-white h rounded-2xl">{activeScreen}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KycFrameActiveStepToggle(props) {
    let { toggleData, isActive = false, handleToggleSelection } = props;
    return (
        <div className="flex flex-row items-center justify-end p-2 transition-colors rounded-md cursor-pointer hover:bg-teal-500 hover:bg-opacity-20" onClick={handleToggleSelection}>
            <div className={`mr-2 font-bold  ${isActive ? "text-teal-800" : "text-white"}`}>
                <div className="text-right">{toggleData.title}</div>
                <div className="text-right">{toggleData.subtitle}</div>
            </div>
            <div className={`flex items-center justify-center w-20 h-20 text-white ${isActive ? "bg-teal-800" : "bg-teal-300"} border-4 rounded-full shadow border-grey-200`}>
                <div className="w-8" dangerouslySetInnerHTML={toggleData.svg}></div>
            </div>
        </div>
    );
}
