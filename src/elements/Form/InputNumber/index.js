import React from 'react';
import propTypes from 'prop-types';
import './index.scss';

//hooks adalah untuk menginzinkan kita menggunakan functional component / state managemenet

export default function Number(props) {

    const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;
    // const [inputValue, setInputValue ] = useState(`${prefix}${value}${suffix}`);

    const onChange = e => {
        let value = String(e.target.value);

        if (+value <= max && +value >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +value
                }
            })
        }
        // console.log(value);
        // console.log(e.target.name);
        // console.log(prefix);
        // console.log(suffix);
        // if(prefix){
        //     value = value.replace(suffix);
        // }
        // if(prefix) value = value.replace(prefix);
        // if(suffix) value = value.replace(suffix);


        // const patternNumeric = new RegExp("[0-9]*");
        // // untuk bermain di regexp bisa kunjungi regexp tester https://regexr.com/
        // const isNumeric = patternNumeric.test(value);
        // // console.log(isNumeric);
        // // console.log(min);
        // // console.log(max);
        // // console.log(isNumeric);
        // // console.log(+value > min)
        // // console.log(props);


        // if (isNumeric && +value <= max && +value >= min){
        //     props.onChange({
        //         target:{
        //             name: name,
        //             value: +value
        //         }
        //     });
        //     setInputValue(`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's': ''}`);
        // } else {

        // }

    };


    const plus = () => {
        // console.log(`tambah ${(value +1)}`);
        value >= min &&
            onChange({
                target: {
                    name: name,
                    value: +value + 1
                }
            })
    }

    const minus = () => {
        // atau bisa diartikan seperti ini
        // if(value < max){
        //     onChange({
        //         target: {
        //             name: name,
        //             value: +value - 1
        //         }
        //     });
        // }
        value <= max &&
            onChange({
                target: {
                    name: name,
                    value: +value - 1
                }
            })
    }

    return (
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    readOnly
                    pattern="[0-9]*"
                    className="form-control"
                    placeholder={placeholder ? placeholder : "0"}
                    value={`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`}
                    // value={String(inputValue)}
                    onChange={onChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    )
}

Number.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: ""
};

Number.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    isSuffixPlural: propTypes.bool,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
};