import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_paymentkey);

const Payment = () => {
    const data = useLoaderData();
    const { appointmentDate, email, patientName, price, slot, treatmentName } = data;
    return (
        <div>
            <h1 className='text-3xl bold'>Payment for {treatmentName}</h1>
            <p className='text-xl'>
                Please pay <strong>${price}</strong> for your appointment in {appointmentDate} at {slot}
            </p>
            <div>
                <Elements stripe={stripePromise}>
                    <Checkout data={data}></Checkout>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
