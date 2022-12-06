import React from "react";
import { DayPicker } from "react-day-picker";

const DateModal = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <input type='checkbox' id='date-modal' className='modal-toggle' />
            <div className='modal '>
                <div className='modal-box '>
                    <label htmlFor='date-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
                        ✕
                    </label>
                    <DayPicker mode='single' selected={selectedDate} onSelect={setSelectedDate} />
                </div>
            </div>{" "}
        </div>
    );
};

export default DateModal;
