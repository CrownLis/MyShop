import React from "react";
import { FC } from "react";
import style from './Slider.module.scss'
import background from './../../../../../assets/img/background.jpg'
import bg1 from './../../../../../assets/img/bg1.png'
import bg2 from './../../../../../assets/img/bg2.png'
import Apple from './../../../../../assets/img/bg3.svg'
import bg4 from './../../../../../assets/img/bg4.png'
import btn_right from './../../../../../assets/img/btn_right.png'
import btn_left from './../../../../../assets/img/btn_left.png'
import { NavLink } from "react-router-dom";

const Slider: FC = () => {
    return (
        <div className={style.bg} style={{ backgroundImage: `url(${background})` }}>
            <div><img src={btn_left} /></div>
            <div className={style.pocket} style={{ backgroundImage: `url(${bg1})` }}>
                <p><span className={style.pocket1}>Shoppy</span><br />
                    <span className={style.pocket2}>BIG</span><br />
                    <span className={style.pocket3}>SAVING DAYS</span><br />
                <span className={style.pocket4}>25th - 29th July</span>
                </p>
            </div>
            <div className={style.phones}><img src={bg2}></img></div>
            <div className={style.block3}>
                <div>
                    <Apple />
                </div>
                <div className={style.text}>
                    <span className={style.text1}>APPLE</span>
                    <span className={style.text2}> iphone 12 Series</span><br />
                    <span className={style.text3}>Starting from</span>
                    <span className={style.text4}> ₹57,999</span><br />
                    <span className={style.text5}>Upgrade to New Apple iPhone</span>
                </div>
                <div>
                    <NavLink to=''>
                        <img src={bg4} />
                    </NavLink>
                </div>
            </div>
            <div className={style.price}>
                <span className={style.text6}>Apple</span>
                <span className={style.text7}> iphone Mini</span>
                <span className={style.text6}>from</span>
                <span className={style.text8}> ₹57,999</span><br />
                <span className={style.text6}>Apple</span>
                <span className={style.text7}> iphone 12</span>
                <span className={style.text6}>from</span>
                <span className={style.text8}> ₹67,999</span><br />
                <span className={style.text6}>Apple</span>
                <span className={style.text7}> iphone 12 pro</span>
                <span className={style.text6}>from</span>
                <span className={style.text8}> ₹1,15,900</span><br />
                <span className={style.text6}>Apple</span>
                <span className={style.text7}> iphone 12 Pro Max</span>
                <span className={style.text6}>from</span>
                <span className={style.text8}> ₹1,25,900</span>
            </div>
            <div><img src={btn_right} /></div>
        </div>
    )
}

export default Slider