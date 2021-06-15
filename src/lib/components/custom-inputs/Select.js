import React from "react";
import styles from "./Select.module.css";

export default function CustomSelect(props) {
    let { horizontalForm = false, label = "Select an option" } = props;
    return (
        <div className={`flex ${horizontalForm ? "flex-row items-center" : "flex-col"}`}>
            <label className={`flex ${horizontalForm ? "pr-3" : "pl-3 mb-1"} text-grey-500`}>{label}</label>
            <select className={` border border-grey-400 rounded-md px-4 pr-12 py-2 appearance-none focus:outline-none focus:border-teal-400 ring-offset-transparent ${styles.default_caret_override}`}>
                <option>Select an option</option>
                <option>Select an option</option>
                <option>Select an option</option>
            </select>
        </div>
    );
}
