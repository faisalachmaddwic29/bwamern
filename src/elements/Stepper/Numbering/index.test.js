import React from 'react'
import { render } from '@testing-library/react'

import Numbering from './index'

class NumberBullets extends React.Component{
    state ={
        data:{
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank fields below",
                content: (
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        itemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },
            payment: {
                title: "Payment",
                description: "Kindly follow the instruction below",
                content: (
                    <Payment
                        data={data}
                        checkout={checkout}
                        itemDetails={ItemDetails}
                        onChange={this.onChange}
                    />
                )
            },
            completed: {
                title: "Yeay! Completed",
                description: null,
                content: (
                    <Completed />
                )
            },
        }
    }

    render(){
        return(
            <Numbering 
                data={this.state.data}
                current
            />
        )
    }
}