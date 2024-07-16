import React from "react";
import "../App.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Head_carousel = ()=>{
    return (

   
    <div className="head">
      
            <h2 className="h2_head_carousel"> What's on your mind ????</h2>
            
            <div>
                <FaChevronLeft className="left_arrow_carousel"/>
                <FaChevronRight className="right_arrow_carousel"/>
            </div>
          
        </div>
 
    )
}

export default Head_carousel;