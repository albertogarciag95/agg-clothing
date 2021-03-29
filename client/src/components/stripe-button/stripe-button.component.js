import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I9DigB8ym7DUnNBzj6wBGuBBJx46R5NtqD2m4i0szN7LIU67a1fBF88gTxsyUjHQQco3Bne2YBFbkt1I5PIzZHl00XZABVHVx';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment succesful')
    }).catch(error => {
      console.log('Payment error', JSON.parse(error));
      alert('There was an issue with your payment')
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;