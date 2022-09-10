import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addProduct } from '../../../../store/ducks/activeUser/activeUserSlice'
import { getActiveUser } from '../../../../store/ducks/activeUser/selectors'
import { getProductsById } from '../../../../store/ducks/product/asyncAction'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { ICard } from '../../../../types/types'
import { getProduct, getProductLoading } from './../../../../store/ducks/product/selectors'
import ModalWindow from './Modal/ModalWindow'
import ArrowLeft from './../../../../assets/img/btn_left.png'
import ArrowRight from './../../../../assets/img/btn_right.png'

import style from './Product.module.scss'
import Loader from '../../Loader/Loader'




const Product: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const activeUser = useAppSelector(getActiveUser)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const product: ICard | null = useAppSelector(getProduct)
    const [amount, setAmount] = useState(1)
    const isLoading = useAppSelector(getProductLoading)

    const addProductToCart = () => {
        activeUser.activeUser ?
            dispatch(addProduct({ productId: Number(id), quantity: amount })) :
            showModal()
    }

    useEffect(() => {
        dispatch(getProductsById(Number(id)))
    }, [])

    return isLoading ? <Loader /> : (
        product ?
            <div className={style.container}>
                <div className={style.img}><img src={product.image}></img></div>
                <div className={style.price}>
                    <div className={style.priceValue}> {product.price}$</div>
                    <div className={style.rating}>
                        <div className={style.ratingBody}>
                            <div className={style.ratingActive} style={{ width: product.rating.rate * 20 + '%' }}></div>
                            <div className={style.ratingItems}>
                                <input type='radio' className={style.ratingItem} value='1' name='rating' />
                                <input type='radio' className={style.ratingItem} value='2' name='rating' />
                                <input type='radio' className={style.ratingItem} value='3' name='rating' />
                                <input type='radio' className={style.ratingItem} value='4' name='rating' />
                                <input type='radio' className={style.ratingItem} value='5' name='rating' />
                            </div>
                        </div>
                        <div className={style.ratingValue}>{product.rating.count}</div>
                    </div>
                    <div className={style.quantityBtn}>
                        <button onClick={e => setAmount(amount - 1)}><img src={ArrowLeft} alt='reduce the amount' /></button>
                        {amount}
                        <button onClick={e => setAmount(amount + 1)}><img src={ArrowRight} alt='increase the amount' /></button>
                    </div>
                    <div className={style.btnBuy}>
                        <button onClick={e => addProductToCart()}>ADD TO CART</button>
                        <ModalWindow
                            visible={isModalVisible}
                        />
                    </div>
                </div>
                <div className={style.description}>{product.description}</div>
            </div> : <div>Not found</div>
    )

}

export default Product