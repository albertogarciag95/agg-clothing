import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I9DigB8ym7DUnNBzj6wBGuBBJx46R5NtqD2m4i0szN7LIU67a1fBF88gTxsyUjHQQco3Bne2YBFbkt1I5PIzZHl00XZABVHVx';

  const onToken = token => {
    console.log(token);
    alert('payment succeded');
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