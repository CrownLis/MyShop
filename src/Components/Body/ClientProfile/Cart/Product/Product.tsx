import React, { FC } from 'react'
import { IProductInCart } from '../../../../../../types/types'
import Cross from './../../../../../../assets/img/cross.png'
import ArrowLeft from './../../../../../../assets/img/btn_left.png'
import ArrowRight from './../../../../../../assets/img/btn_right.png'

import style from './Product.module.scss'
import { decreaseAmountProduct, deleteProduct, increaseAmountProduct } from '../../../../../../store/ducks/activeUser/activeUserSlice'
import { useAppDispatch } from '../../../../../../store/hooks'


const Product: FC<IProductInCart> = ({ product, amount }) => {

    const dispatch = useAppDispatch()


    const increaseAmount = (productId: number) => {
        dispatch(increaseAmountProduct(productId))
    }

    const decreaseAmount = (productId: number) => {
        dispatch(decreaseAmountProduct(productId))
    }

    const deleteProductFromCart = (productId: number) => {
        console.log(productId)
        dispatch(deleteProduct(productId))
    }


    return (
        <div className={style.container}>
            <div className={style.product}>
                <div>
                    {product.title}
                </div>
                <div>
                    <img src={product.image}></img>
                </div>
                <div>
                    {product.price}$
                </div>
            </div>
            <div className={style.quantity}>
                <button onClick={e => deleteProductFromCart(product.id)}><img src={Cross}></img></button>
                quantity:<br />
                <div className={style.quantityBtn}>
                    <button onClick={e => decreaseAmount(product.id)}><img src={ArrowLeft} alt='reduce the amount' /></button>
                    {amount}
                    <button onClick={e => increaseAmount(product.id)}><img src={ArrowRight} alt='increase the amount' /></button>
                </div>
            </div>
        </div>
    )
}

export default Product