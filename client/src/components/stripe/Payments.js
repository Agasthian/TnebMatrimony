import React from 'react'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

import * as actions from '../../action'

const Payments = (props) => {
  return (
    <>
        <StripeCheckout
            name='Emaily'
            description='$5 for 5 email credits'
            amount={500}
            token={token => props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className='bg-green-500 text-center px-3 py-1 rounded-md'> Add credits</button>
        </StripeCheckout>
    </>
  )
}

export default connect(null, actions) (Payments)