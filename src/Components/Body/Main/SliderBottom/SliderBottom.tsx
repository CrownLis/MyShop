import { FC } from "react";
import React from "react";
import img1 from './../../../../assets/img/sliderBot1.jpg'
import img2 from './../../../../assets/img/sliderBot2.jpg'
import img3 from './../../../../assets/img/sliderBot3.jpg'

import style from './SliderBottom.module.scss'

const SliderBottom: FC = () => {
    return (
        <div className={`${style.slider} row`}>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12"> 
                <img src={img1} />
                <button></button>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <img src={img2} />
                <button></button>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <img src={img3} />
                <button></button>
            </div>
        </div>
    )
}

export default SliderBottom