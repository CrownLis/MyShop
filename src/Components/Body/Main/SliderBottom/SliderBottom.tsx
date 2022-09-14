import { FC } from "react";
import React from "react";
import img1 from './../../../../../assets/img/sliderBot1.jpg'
import img2 from './../../../../../assets/img/sliderBot2.jpg'
import img3 from './../../../../../assets/img/sliderBot3.jpg'

import style from './SliderBottom.module.scss'

const SliderBottom: FC = () => {
    return (
        <div className={style.slider}>
            <div> 
                <img src={img1} />
                <button></button>
            </div>
            <div>
                <img src={img2} />
                <button></button>
            </div>
            <div>
                <img src={img3} />
                <button></button>
            </div>
        </div>
    )
}

export default SliderBottom