import React , {Component} from 'react';
import { render , fireEvent} from '@testing-library/react';
import { screen } from '@testing-library/dom';
import InputDate from "./index";
import TestInput from '../InputNumber/index.test';

class TextInput extends Component{
    state={
        value:{
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    };

    handleChange = e =>{
        this.setState({
            value: e.target.value
        });
    };

    render(){
        return(
            <InputDate 
                max={30}
                onChange={this.handleChange}
                name="value"
                value={this.state.value}
            />
        );
    }
}

const setup = () =>{
    const {container} = render(<TextInput />);
    const wrapper = container.querySelector(`.input-date`);
    // console.log(container);
    const input = container.querySelector(`input.form-control`);

    return {
        container, wrapper, input
    };
};

test('should have wrapper with className .form-control', () => {
    const { wrapper } = setup();
    // console.log(wrapper)

    expect(wrapper).toBeInTheDocument();
});


test('should have tag <input> and has className .form-control', () => {
    const { input } = setup();
    // console.log(input)
    expect(input).toBeInTheDocument();
});


test('should show date picker when user click input date', () => {
    const { container, input } = setup();

    // setup debug
    // screen.debug();
    fireEvent.click(input, {button : 1});
    const datePickerWrapper = container.querySelector(`.date-range-wrapper`);
    // screen.debug();
    
    // screen debug

    expect(datePickerWrapper).toBeInTheDocument();
});
