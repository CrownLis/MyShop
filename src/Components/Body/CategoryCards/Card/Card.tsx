import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Card.module.scss'

interface CardsProps {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: { count: number, rate: number }
}

const Card: FC<CardsProps> = ({ id, title, price, description, category, image, rating }) => {
    return (
        <div className={style.cart}>
            <div className={style.img}>
                <NavLink to={`${id}`}><img src={image}></img></NavLink></div>
            <div className={style.name}>{title}</div>
            <div className={style.rating}>
                <div className={style.ratingBody}>
                    <div className={style.ratingActive} style={{ width: rating.rate * 20 + '%' }}></div>
                    <div className={style.ratingItems}>
                        <input type='radio' className={style.ratingItem} value='1' name='rating' />
                        <input type='radio' className={style.ratingItem} value='2' name='rating' />
                        <input type='radio' className={style.ratingItem} value='3' name='rating' />
                        <input type='radio' className={style.ratingItem} value='4' name='rating' />
                        <input type='radio' className={style.ratingItem} value='5' name='rating' />
                    </div>
                </div>
                <div className={style.ratingValue}>{rating.count}</div>
            </div>
            <div className={style.price}>{price}$</div>
            <div className={style.btnBuy}>
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Card