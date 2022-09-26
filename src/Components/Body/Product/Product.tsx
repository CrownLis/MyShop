import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { addProduct } from '../../../store/activeUser/activeUserSlice'
import { getActiveUser } from '../../../store/activeUser/selectors'
import { getProductsById } from '../../../store/product/asyncAction'
import { getProduct, getProductLoading } from '../../../store/product/selectors'
import { ICard } from '../../../types/types'
import ModalWindow from './ModalWindow'
import ArrowLeft from './../../../assets/img/btn_left.png'
import ArrowRight from './../../../assets/img/btn_right.png'
import Loader from '../../Loader'

import style from './Product.module.scss'





const Product: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const activeUser = useAppSelector(getActiveUser)
    const { id } = useParams()
    const dispatch = useAppDispatch()
    const product: ICard | null = useAppSelector(getProduct)
    const [amount, setAmount] = useState(1)
    const isLoading = useAppSelector(getProductLoading)

    const addProductToCart = () => {
        activeUser.activeUser ?
            dispatch(addProduct({ productId: Number(id), quantity: amount })) :
            setIsModalVisible(!isModalVisible)
    }

    const closeModal = () => {
        setIsModalVisible(false)
    }

    useEffect(() => {
        dispatch(getProductsById(Number(id)))
    }, [])

    return isLoading ? <Loader /> : (
        product ?
            <div className={style.container}>
                <h2 className={style.title}>{product.title}</h2>
                <div className={style.img}>
                    <img src={product.image} alt={product.title}/>
                    </div>
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
                            setVisible={closeModal}
                        />
                    </div>
                </div>
                <div className={style.description}>{product.description}</div>
            </div> : <div>Not found</div>
    )

}

export default Product