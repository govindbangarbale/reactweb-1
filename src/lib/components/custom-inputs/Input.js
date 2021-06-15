import React from "react";

export default function CustomInput(props) {
    let { horizontalForm = false, label = "Enter Data", type = "text", placeholder = "Enter text." } = props;
    return (
        <div className={`flex ${horizontalForm ? "flex-row items-center" : "flex-col"}`}>
            <label className={`flex ${horizontalForm ? "pr-3" : "pl-3 mb-1"} text-grey-500`}>{label}</label>
            <input type={type} className="outline-none rounded-md border border-grey-400 px-4 py-2 focus-visible:border-teal-400 focus:border-teal-400" placeholder={placeholder} />
        </div>
    );
}
