import React ,{ useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Btn, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { Form, PaymentFormContainer} from './payment-form.styles'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPaym, setIsProcessingPaym] = useState(false)

    const paymHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }
        setIsProcessingPaym(true);

        const response = await fetch('/.netlify/functions/create-paym-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 })

        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                }
            }
        });
        setIsProcessingPaym(false);

        if (paymentResult.error){
            alert (paymentResult.error)
        }else {
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert ('Payment Successful')
            }
        }
    }

  return (
    <PaymentFormContainer>
        
        <Form onSubmit={paymHandler}>
            <h2>Card Payment:</h2>
            <CardElement />
            <Btn isLoading={isProcessingPaym} 
                btnType={BUTTON_TYPE_CLASSES.inverted}
                >Pay now
            </Btn>
        </Form>   
    </PaymentFormContainer>
  )
}

export default PaymentForm