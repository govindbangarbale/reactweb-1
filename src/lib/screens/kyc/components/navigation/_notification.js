import React, { useState } from "react";
import { useOuterClick } from "../../../../hooks/out_of_bounds_click_detect";

export default function Notification() {
    const [notificationToggle, setnotificationToggle] = useState(false);
    const innerRef = useOuterClick((e) => {
        if (notificationToggle) {
            setnotificationToggle(false);
        }
    });

    return (
        <div className="p-1 mx-2" ref={innerRef}>
            <div className={`relative transition-colors border px-2 py-2 rounded-md cursor-pointer hover:bg-blue-grey-50 hover:border-blue-grey-100 ${notificationToggle ? "bg-blue-grey-50 border-blue-grey-100" : "border-transparent"}`} onClick={() => setnotificationToggle(!notificationToggle)}>
                <span className="absolute px-1 text-xs leading-5 text-white bg-teal-300 rounded-lg shadow-sm right-2 top-1">2</span>
                <div className="w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M 16 3 C 14.894531 3 14 3.894531 14 5 C 14 5.085938 14.019531 5.167969 14.03125 5.25 C 10.574219 6.132813 8 9.273438 8 13 L 8 22 C 8 22.566406 7.566406 23 7 23 L 6 23 L 6 25 L 13.1875 25 C 13.074219 25.316406 13 25.648438 13 26 C 13 27.644531 14.355469 29 16 29 C 17.644531 29 19 27.644531 19 26 C 19 25.648438 18.925781 25.316406 18.8125 25 L 26 25 L 26 23 L 25 23 C 24.433594 23 24 22.566406 24 22 L 24 13.28125 C 24 9.523438 21.488281 6.171875 17.96875 5.25 C 17.980469 5.167969 18 5.085938 18 5 C 18 3.894531 17.105469 3 16 3 Z M 15.5625 7 C 15.707031 6.988281 15.851563 7 16 7 C 16.0625 7 16.125 7 16.1875 7 C 19.453125 7.097656 22 9.960938 22 13.28125 L 22 22 C 22 22.351563 22.074219 22.683594 22.1875 23 L 9.8125 23 C 9.925781 22.683594 10 22.351563 10 22 L 10 13 C 10 9.824219 12.445313 7.226563 15.5625 7 Z M 16 25 C 16.5625 25 17 25.4375 17 26 C 17 26.5625 16.5625 27 16 27 C 15.4375 27 15 26.5625 15 26 C 15 25.4375 15.4375 25 16 25 Z" />
                    </svg>
                </div>
            </div>
            <div className={`opacity-0 invisible -translate-y-2 scale-95 ${notificationToggle ? "opacity-100 visible translate-y-0 scale-100" : ""} transition-all duration-300 transform origin-top-right`}>
                <div className="absolute z-[2] right-0 mt-2 overflow-hidden origin-top-right bg-white rounded-[5px] outline-none shadow-md w-96">
                    <div className="px-4 py-2 font-bold text-white bg-blue-grey-300">Notifications</div>
                    <div className="overflow-y-auto divide-y divide-blue-grey-50 h-96">
                        <NotificationTile />
                        <NotificationTile />
                        <NotificationTile />
                        <NotificationTile />
                        <NotificationTile />
                        <NotificationTile />
                        <NotificationTile />
                    </div>
                </div>
            </div>
        </div>
    );
}

function NotificationTile() {
    return (
        <div className="flex px-2 py-2 cursor-pointer hover:bg-blue-grey-50">
            <div className="p-2 text-white rounded-md w-11 h-11 bg-blue-grey-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div className="w-full ml-2">
                <div className="text-sm font-bold leading-tight text-grey-600">User</div>
                <div className="max-w-[280px] truncate text-grey-500 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed laborum consectetur repellat corporis voluptatum nam tempore praesentium nostrum dolores? Ut excepturi laboriosam vitae quos omnis dolor voluptatum error dignissimos dolorum.</div>
                <div className="max-w-[280px] truncate text-grey-500 text-sm">21st March 2020</div>
            </div>
        </div>
    );
}
