import React from "react";
import { FC } from "react";
import Slider from "./Slider";
import SliderBottom from "./SliderBottom";


import style from './Main.module.scss'


const Main: FC = () => {

    return (
        <div className={style.container}>
            <Slider />
            <SliderBottom/>
        </div>
    )
}

export default Main