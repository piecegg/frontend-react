import React from 'react'
import { useState } from 'react'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios'
const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "gray",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "black" },
			"::placeholder": { color: "lightgray" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "black"
		}
	}
}

export default function PaymentForm() {
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardCvcElement, CardExpiryElement, CardNumberElement)
        })

        if(!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:8000/payment", {
                    amount: 10000,
                    id
                })

                if(response.data.success){
                    console.log("Successful Payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        }else {
            console.log(error.message)
        }
    }
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
   return (
    <>
    {!success ? 
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
            <div>
                <CardNumberElement className=' max-w-sm  rounded-md ml-4 mx-auto border-2 bg-white px-2 py-3 ' options={CARD_OPTIONS} />
            </div>
        </fieldset>
        <div className='flex justify-center'>
        <fieldset >
            
                <CardExpiryElement className='w-48 rounded-md border-2 bg-white px-2 py-3 '  options={CARD_OPTIONS} />
            
        </fieldset>
        <fieldset>
           
                <CardCvcElement className='w-48 rounded-md border-2 bg-white px-2 py-3 ' options={CARD_OPTIONS} />
            
        </fieldset>
        </div>
        <div className="flex justify-center mt-6">
        <button className=" w-96 mx-auto rounded-md bg-opacity-70 px-22 py-4 hover:bg-opacity-100 text-stone-200 bg-fadeochre shadow-lg ease-out duration-150 transition-all hover:scale-105 ">
          COMPLETE PURCHASE
        </button>
      </div>
    </form>:<div className="payment-success">
        <h2>Payment successful</h2>
        <h3 className='Thank-you'>Thank you for your patronage</h3>
    </div>
}
</>
       )
}