import React, { Component } from 'react'
// import InputNumber from 'elements/Form/InputNumber'
import InputDate from 'elements/Form/inputDate'
import Breadcrumb from 'elements/Breadcrumb';
// import { addDays } from 'date-fns'; 


export default class Example extends Component {
    state = {
        value: {
            startDate: new Date(),
            // endDate: addDays(new Date(), 8),
            // endDate: null,
            endDate: new Date(),
            key: 'selection'
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const breadcrumbList = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];
        // console.log(this.state.value);

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-4">
                        <InputNumber 
                        suffix=" night"
                        isSuffixPlural
                        max={30} 
                        onChange={this.handleChange} 
                        name="value" 
                        value={this.state.value} 
                    />
                        <InputDate
                            max={30}
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        />
                        <Breadcrumb data={breadcrumbList}/>
                    </div>
                </div>

            </div>
        )
    }
}




