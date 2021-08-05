import React from 'react'
import TotalViewForPayment from './TotalViewForPayment'

function RightCartComponent(props) {
    const { cart } = props;

    return (
        <TotalViewForPayment cart={cart} />
    )
}

export default RightCartComponent
