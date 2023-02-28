import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function Stripe() {
  return (
    <Elements stripe={stripePromise}>
    <PaymentForm />
   </Elements>
   )
}

export default Stripe