import React from "react";
import "./Slider.css";
import {useState} from "react";

let Slider = () => {

let [value,setValue] = useState(0);


let left = () => {

    setValue(value = value - 1920);
    if(value == -5760){

        setValue(value =  0);        

    }


}

setInterval(function(){
    left()

},5000)

    return(

        <div>
            
        <div className="Slider_block">
            <div className="slider_slide">
            <div style={{transform: `translateX(${value}px)`}} className="slide">

            <img  src="./photo/img1.jpg" alt="" />

            </div>

            <div style={{transform: `translateX(${value}px)`}} className="slide">

            <img  src="./photo/img2.jpg" alt="" />

            </div>

            <div style={{transform: `translateX(${value}px)`}} className="slide">

            <img  src="./photo/img3.jpg" alt="" />

            </div>
    
            </div>
        </div>
            

        </div>

    )


}
export default Slider;