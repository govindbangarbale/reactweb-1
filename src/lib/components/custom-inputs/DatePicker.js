import { DatePicker } from "@material-ui/pickers";
import React, { useState } from "react";

export default function CustomDatePicker() {
    const [selectedDate, setselectedDate] = useState(new Date());
    return (
        <div>
            <DatePicker label="Basic example" inputVariant="outlined" value={selectedDate} onChange={setselectedDate} format="DD/MM/YYYY" views={["year", "month", "date"]} />
        </div>
    );
}
