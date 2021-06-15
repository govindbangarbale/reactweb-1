import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export default function Timer() {
    const [time, settime] = useState(new Date());

    useEffect(() => {
        setTimeout(() => {
            settime(new Date());
        }, 1000);
    });
    return (
        <div className="flex flex-col items-center mx-2">
            <div className="text-sm text-grey-600">{format(time, "dd MMMM yyyy")}</div>
            <div className="font-bold">{format(time, "HH:mm:ss")}</div>
        </div>
    );
}
