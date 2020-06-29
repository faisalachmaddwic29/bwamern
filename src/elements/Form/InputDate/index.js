import React, { useState, useRef, useEffect } from 'react';
import propTypes from "prop-types";
// useRef= React.createRef();
// useEffect = lifecycle yang di perkenalkan oleh react hooks, mungkin dulu selalu memanggil component didmount()

import { DateRange } from 'react-date-range';

import "./index.scss";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import formatDate from "utils/formatDate";
import iconCalender from "assets/images/icons/ic_calender.svg";

//jika menggunakan class component
/*
    constructor(){
        super(props);
        this.state = {
            value: "haha"
        }
    }


    componentDidMount(){
        // ditambahkan listener
    } // berhasil meload semua dom

    componentDidUpdate(prevProps, prevState){
        if(prevProps !== this.props){
            
        }
        if(prevState !== this.state){
            
        }
    } // akan update untuk pengecakan antara state dan props dan memiliki 2 params yaitu props sebelumnya dan state sebelumnya

    //jika menggunakan hooks itu sudah diwakili oleh useEffect()
    //contoh

    componentWillUnmount(){
        //remove listener
    }
    
    useEffect(()=>{
        //melakukan update state atau kegiatan atau proses ke windows 
        //contohnya windows.title = "Home"
    },[state])

*/


export default function Date(props) {

    // destructer dulu si value dengan name
    const { value, name } = props;
    // console.log(`darimana ini : ${value.startDate}`);
    // untuk toggle wrapper si date pickernya dan setisShowed untuk true falsena
    const [isShowed, setIsShowed] = useState(false);

    const datePickerChange = value => {
        // console.log(value);
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        };
        props.onChange(target);
    }

    // function pertama menggunakan hooks untuk lifecyclenya 
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside); //sama aja dengan component didmount

        return (() => {
            document.removeEventListener("mousedown", handleClickOutside); // component will unmount
        });
    });

    //sekalian pengenalan useRef
    const refDate = useRef(null);
    const handleClickOutside = event => {
        refDate && !refDate.current.contains(event.target) && setIsShowed(false);; //method contains itu == perbandingan
    }

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false); //untuk pengecekan jumlah huruf keberapa atau bisa juga array atau string. hasil kembaliannya itu dari -1
    }
    
    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${value.endDate ? " - " + formatDate(value.endDate) : ""}`;
    
    return (
        <div ref={refDate} className={["input-date mb-3", props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-pretend bg-gray-900">
                    <span className="input-group-text">
                        <img src={iconCalender} alt="icon calender" />
                    </span>
                </div>
                <input
                    readOnly
                    type="text"
                    className="form-control"
                    value={displayDate}
                    onClick={() => setIsShowed(!isShowed)}
                />

                {isShowed && (
                    <div className="date-range-wrapper">
                        <DateRange
                            editableDateInputs={true}
                            onChange={datePickerChange}
                            moveRangeOnFirstSelection={false}
                            onRangeFocusChange={check}
                            ranges={[value]}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    // placeholder: propTypes.string,
    outerClassName: propTypes.string
};