import React, { useState }  from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";

function DatePicker({setdate}) {
    const [selectedDate, setSelectedDate] = useState();

    const dateChange=(date)=>{
        setSelectedDate(date);
        setdate(date);
    }
    
    return (
        <div>
            <ReactDatePicker
            className={styles.DatePicker}
            selected={selectedDate}
            onChange={dateChange}
            dateFormat="dd.MM.YYYY"
            placeholderText='Дата'
            closeOnScroll={(e) => e.target === document}/>
        </div>
    );
}

export default DatePicker;