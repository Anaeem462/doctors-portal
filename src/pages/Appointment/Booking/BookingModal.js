import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "./../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, setTreatMent, selectedDate, refetch }) => {
    const { name, slots, price } = treatment;

    const date = format(selectedDate, "PP");
    const { user } = useContext(AuthContext);

    const handleBooking = (e) => {
        e.preventDefault();

        if (!user) {
            return toast.error("please log in first", { duration: 3000, position: "top-center" });
        } else {
            const form = e.target;
            const patientname = form.name.value;
            const email = form.email.value;
            const slot = form.slot.value;
            const phone = form.phone.value;

            const booking = {
                appointmentDate: date,
                patientName: patientname,
                treatmentName: name,
                email,
                slot,
                phone,
                price,
            };
            // set user booking in mongodb -->doctorsPortal--> bookings
            fetch(`${process.env.REACT_APP_serverurl}/bookings`, {
                method: "POST",
                headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
                body: JSON.stringify(booking),
            })
                .then((res) => res.json())
                .then((data) => {
                    // console.log(data);
                    if (data.acknowledged) {
                        toast.success(`successfully booking  ${patientname}`, { duration: 1000, position: "top-center" });
                    } else {
                        toast.error(data.message, { duration: 1000, position: "top-center" });
                    }
                    refetch();
                    setTreatMent(null);
                })
                .catch((err) => {
                    console.log(err);
                    toast.error(err.message);
                });
        }
    };

    return (
        <div>
            <input type='checkbox' id='booking-modal' className='modal-toggle' />
            <div className='modal '>
                <div className='modal-box relative '>
                    <label htmlFor='booking-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>
                        ✕
                    </label>
                    <div className='flex items-center '>
                        <h3 className='text-lg font-bold'>{name || "No data"}</h3>
                        <p className='text-sm ml-2 text-primary'> ${price}</p>
                    </div>
                    <>
                        <form onSubmit={handleBooking} action='' className=' grid gap-3 mt-4'>
                            <input name='date' type='text' value={date} disabled className='input input-bordered ' />

                            <select name='slot' className='select select-bordered w-full '>
                                {slots?.map((slot, i) => (
                                    <option key={i} value={slot}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
                            <input
                                required
                                name='name'
                                defaultValue={user?.displayName}
                                disabled
                                type='text'
                                placeholder='Full Name'
                                className='input input-bordered'
                            />
                            <input name='phone' type='text' placeholder='Phone Number' className='input input-bordered' />
                            <input
                                defaultValue={user?.email}
                                disabled
                                required
                                name='email'
                                type='email'
                                placeholder='Email'
                                className='input input-bordered'
                            />
                            <button className='btn  bg-neutral text-[#D4D9E3] font-bold'>Submit</button>
                        </form>
                    </>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
