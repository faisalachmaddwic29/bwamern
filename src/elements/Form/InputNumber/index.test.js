import React, {Component} from 'react'
// fireEvent itu untuk mensimulasikan untuk mengclick di browser lewat dari programming saja
import { render, fireEvent } from '@testing-library/react'
import InputNumber from './index'

export default class TestInput extends Component {
    state = {
        value : ""
    };

    // atau

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         value : ""
    //     }
    // }

    handleChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
            // value: e.target.value
        });
    }

    render() {
        // console.log(this.state.value);
        return (
            <InputNumber max={30} onChange={this.handleChange} name="value" value={this.state.value} />
        )
    }
}

const setup = () =>{
    const {container} = render(<TestInput />);
    const input = container.querySelector(`input.form-control[name='value']`);

    return {
        input
    }
}
test('should not able to change value when reach max value', () => {
    const {input} = setup();

    fireEvent.change(input, { target : {value: 33} });
    // console.log(input.value);
    expect(input.value).toBe("");
});

test('should able to change value', () => {
    const {input} = setup();

    fireEvent.change(input, { target : {value: 23} });
    expect(input.value).toBe("23");
});



