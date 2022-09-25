import React, { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { addProduct } from '../../../../../store/ducks/activeUser/activeUserSlice'
import { getActiveUser } from '../../../../../store/ducks/activeUser/selectors'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
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

const activeUser = useAppSelector(getActiveUser)
const dispatch = useAppDispatch()
const navigate = useNavigate()

    const addProductToCart = () => {
        activeUser.activeUser ?
            dispatch(addProduct({ productId: Number(id), quantity: 1 })) :
            navigate('/SignIn')
    }

    return (
        <div className={`${style.card} col-md-3`}>
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
                <button onClick={addProductToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Card