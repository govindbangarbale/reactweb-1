import React from "react";
import Account from "./_account";
import Notification from "./_notification";
import Timer from "./_timer";

export default function Navigation() {
    return (
        <div className="relative z-20 flex flex-row items-center justify-end px-4 bg-white shadow-md">
            <Timer />
            <Notification />
            <Account />
        </div>
    );
}
