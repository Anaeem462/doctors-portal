import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const Checkout = ({ data }) => {
    const navigate = useNavigate();
    const [clientSecretKey, setClientSecretKey] = useState();
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [transactionId, setTransactionId] = useState();
    const { price, patientName, email, treatmentName, slot, appointmentDate, _id } = data;

    console.log(process.env.REACT_APP_serverurl);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_serverurl}/create-payment-intent`, {
            method: "POST",
            headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((result) => {
                setClientSecretKey(result.clientSecret);
            });
    }, [price]);

    const handleSubmit = async (e) => {
        setProcessing(true);
        e.preventDefault();
        setSuccess("");
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
        }

        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecretKey, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: email,
                },
            },
        });

        if (paymentError) {
            setCardError(paymentError.message);
            setProcessing(false);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            setSuccess("congratulation! payment successfully");
            setTransactionId(paymentIntent.id);
            const payments = {
                name: patientName,
                treatmentName,
                treatment_Date: appointmentDate,
                treatment_time: slot,
                email,
                transaction_id: paymentIntent.id,
                booking_id: _id,
            };
            fetch(`${process.env.REACT_APP_serverurl}/payments`, {
                method: "POST",
                headers: { "content-type": "application/json", authorization: localStorage.getItem("userToken") },
                body: JSON.stringify(payments),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                    navigate("/dashboard");
                })
                .catch((err) => console.error(err.message));
        }
        setProcessing(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='m-4  pt-12 px-4 pb-3 rounded-md shadow-2xl bg-base-400 w-1/3'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                display: "block",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <div className='flex items-center justify-center mt-9 '>
                    <button type='submit' className='btn btn-success btn-xl px-12' disabled={!stripe || !clientSecretKey || success || processing}>
                        {success ? "payed" : "pay"}
                    </button>
                </div>
            </form>
            <p className='text-red-600 text-xl'>{cardError}</p>
            {success && (
                <>
                    <p className='text-green-600 text-xl text-bold'>{success}</p>
                    <p className='text-xl text-bold'>Transaction ID: {transactionId}</p>
                </>
            )}
        </>
    );
};

export default Checkout;
