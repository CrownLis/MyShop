import React, { FC, useState } from "react";
import leftArrow from './../../../../../assets/img/btn_left.png'
import rightArrow from './../../../../../assets/img/btn_right.png'
import style from './Carousel.module.scss'


const Carousel: FC = () => {
    const DIRECTIOM_TYPE = {
        next: "NEXT",
        prev: "PREV"
    };
    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6])
    const [current, setCurrent] = useState(2)
    const [needTransition, setNeedTransition] = useState(true)
    const [direction, setDirection] = useState('')


    const handleSliderTranslateEnd = () => {
        console.log("handleSliderTranslateEnd");
        switch (direction) {
            case DIRECTIOM_TYPE.next:
                console.log('next')
                vaildNextSlider();
                break;
            case DIRECTIOM_TYPE.prev:
                console.log('prev')
                vaildPrevSlider();
                break;
            default:
                break;
        }
    };

    const vaildNextSlider = () => {
        let _current = current;
        if (_current > nums.length - 3) {
            _current -= 1;
            let _nums = [...nums, ...nums.slice(0, 1)].slice(-6);
            setNeedTransition(false)
            setCurrent(current)
            setNums(_nums)
        };
    }

    const vaildPrevSlider = () => {
        let _current = current;
        if (_current < 1) {
            _current += 1;
            let _nums = [...nums.slice(-1), ...nums].slice(0, 6);
            setNeedTransition(false)
            setCurrent(_current)
            setNums(_nums)
        }
    };

    const handleNext = () => {
        let _current = current + 1;
        if (_current > nums.length - 3) return
        setNeedTransition(true)
        setCurrent(_current)
        setDirection(DIRECTIOM_TYPE.next)
    };

    const handlePrev = () => {
        if (current - 1 < 0) return
        setNeedTransition(true)
        setCurrent(current - 1)
        setDirection(DIRECTIOM_TYPE.prev)
    };

    const transLateVal = () => {
        return -(current * 33.333333);
    };

    const sliderStyle = () => {
        if (needTransition) {
            return {
                transform: `translateX(${transLateVal()}%)`,
                transition: "transform 0.3s ease-in-out"
            };
        }

        return {
            transform: `translateX(${transLateVal()}%)`
        };
    };

    return (
        <div className={style.carousel}>
            <ul
                style={sliderStyle()}
                onTransitionEnd={handleSliderTranslateEnd}
            >
                {nums.map((item, i) => (
                    <li key={i} className={`${style.item} col-lg-4 col-md-6 col-sm-12 col-xs-12`}>{item}</li>
                ))}
            </ul>
            <div>
                <button onClick={handlePrev}> <img src={leftArrow} /></button>
                <button onClick={handleNext}> <img src={rightArrow} /></button>
            </div>
        </div>
    );
}

export default Carousel