import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import Header from 'parts/Header'
import Button from 'elements/Button'
import Stepper, { Controller, MainContent, Meta, Numbering } from 'elements/Stepper'

import BookingInformation from 'parts/Checkout/BookingInformation'
import Completed from 'parts/Checkout/Completed'
import Payment from 'parts/Checkout/Payment'

import ItemDetails from 'json/itemDetails.json';



export default class Checkout extends Component {
    // payloads
    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: ""
        },

    };

    onChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value,
            }
        })
    }

    // lifecycle 
    componentDidMount() {
        window.scroll(0, 0);
    }


    render() {
        const { data } = this.state;

        // akan menjadi props redux ya
        const checkout = {
            duration: 3
        }

        const steps = {
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
        return (
            <React.Fragment>
                <Header isCentered />
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <>
                                <Numbering
                                    data={steps}
                                    current={CurrentStep}
                                    style={{ marginBottom: 30 }}
                                />
                                <Meta data={steps} current={CurrentStep} />
                                <MainContent data={steps} current={CurrentStep} />
                                {
                                    CurrentStep === "bookingInformation" && (
                                        <Controller>
                                            {
                                                data.firstName !== "" &&
                                                data.lastName !== "" &&
                                                data.email !== "" &&
                                                data.phone !== "" &&
                                                (
                                                    <Fade>
                                                        <Button
                                                            className="btn mb-3"
                                                            type="button"
                                                            isBlock
                                                            isPrimary
                                                            hasShadow
                                                            onClick={nextStep}
                                                        >Continue To Book</Button>
                                                    </Fade>
                                                )
                                            }
                                            <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isLight
                                                href={`/properties/${ItemDetails._id}`}>
                                                Cancel
                                            </Button>
                                        </Controller>
                                    )
                                }
                                {
                                    CurrentStep === "payment" && (
                                        <Controller>
                                            {
                                                data.proofPayment !== "" &&
                                                data.bankName !== "" &&
                                                data.bankHolder !== "" &&
                                                (
                                                    <Fade>
                                                        <Button
                                                            className="btn mb-3"
                                                            type="button"
                                                            isBlock
                                                            isPrimary
                                                            hasShadow
                                                            onClick={nextStep}
                                                        >Continue To Book</Button>
                                                    </Fade>
                                                )
                                            }
                                            <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isLight
                                                href={prevStep}>
                                                Cancel
                                            </Button>
                                        </Controller>
                                    )
                                }
                                {
                                    CurrentStep === "completed" && (
                                        <Controller>
                                            <Button
                                                className="btn"
                                                type="link"
                                                isBlock
                                                isPrimary
                                                hasShadow
                                                href="/"
                                            >
                                                Back To Home
                                    </Button>
                                        </Controller>
                                    )
                                }
                            </>
                        )
                    }
                </Stepper>

            </React.Fragment>
        )
    }
}
