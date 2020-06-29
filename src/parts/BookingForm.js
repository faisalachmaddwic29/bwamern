import React, { Component } from 'react'

import InputNumber from 'elements/Form/InputNumber'
import InputDate from 'elements/Form/InputDate'
import propTypes from 'prop-types';
import Button from 'elements/Button';

export default class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                duration: 1,
                date: {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: 'selection'
                }
            }
        }
    }
    
    updateData = e => {
        // const A = 65;
        // const b = new Array(1,2,3,4,5).map((_, i) =>{
        //     // console.log(i);
        //     console.log(String.fromCharCode(A + i));
    
        // });
        // console.log(Array.from({length: 26}, (_, i) => String.fromCharCode(A + i)));
        // console.log(e);
        const { name } = e.target;
        console.log([name]);
        this.setState({
            data:{
                ...this.state.data,
                // [e.target.name] : e.target.value
                [e.target.name] : e.target.value
            }
        })
        
    }
    componentDidUpdate(prevProps, prevState){
        const { data } = this.state;

        if(prevState.data.date !== data.date){
            const  startDate = new Date(data.date.startDate);
            const  endDate = new Date(data.date.endDate);
            const countDuration = new Date(endDate - startDate).getDate();

            this.setState({
                data:{
                    ...this.state.data,
                    duration: countDuration
                    // state.data,
                }
            });
        }

        if(prevState.data.duration !== data.duration){
            const startDate = new Date(data.date.startDate);
            const endDate = new Date(
                startDate.setDate(startDate.getDate() + data.duration - 1)
            );
            this.setState({
                ...this.state,
                data:{
                    ...this.state.data,
                    date:{
                        ...this.state.data.date,
                        endDate:endDate
                    }
                }
            });
        }
    }

    render() {
        const { data } = this.state;
        const { itemDetails, startBooking } = this.props;

        return (
            <div className="card bordered" style={{ padding: "60px 80px" }}>
                <h4 className="mb3">Start Booking</h4>
                <h5 className="h2 text-teal mb-4">
                    ${itemDetails.price}{" "}
                    <span className="text-gray-500 font-weight-light">
                        per {itemDetails.unit}
                    </span>
                </h5>

                <label htmlFor="duration">How long you will stay?</label>
                <InputNumber
                    suffix=" night"
                    isSuffixPlural
                    max={30} 
                    onChange={this.updateData} 
                    name="duration" 
                    value={data.duration} 
                />

                <label htmlFor="date">Pick a date</label>
                <InputDate 
                    onChange={this.updateData}
                    name="date"
                    value={data.date}
                />

                <h6 className="text-gray-500 font-weight-light" style={{ marginBottom:40 }}>
                    You will pay{" "}
                    <span className="text-gray-900 font-weight-bold">
                        ${itemDetails.price * data.duration} USD
                    </span>{" "}
                    per{" "}
                    <span className="text-gray-900 font-weight-bold">
                        {data.duration} {itemDetails.unit}
                    </span>
                </h6>

                <Button
                    className="btn"
                    type="link"
                    hasShadow
                    isPrimary
                    isBlock
                    onClick ={startBooking}
                    href={`/checkout`}
                >Countinue To Book</Button>
            </div>
        )
    }
}

BookingForm.prototypes = {
    itemDetails: propTypes.object,
    startBooking: propTypes.func
};