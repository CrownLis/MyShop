import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductById } from '../../../../API/shopAPI'
import { getActiveUser } from '../../../../store/activeUser/selectors'
import { useAppSelector } from '../../../../store/hooks'
import { ICard, IProductInCart } from '../../../../types/types'
import Product from './Product'

import style from './Cart.module.scss'


const Cart: FC = () => {

    const activeUser = useAppSelector(getActiveUser);
    const [visible, setVisible] = useState('none')
    const navigate = useNavigate()


    const [productsInCart, setProductsInCart] = useState<IProductInCart[]>()

    const fetchProduct = async (id: number) => {
        const product = await getProductById(id)
        return product.data
    }

    const fetchAllProducts = async () => {
        if (activeUser && activeUser.cart && activeUser.cart.products && activeUser.cart) {
            const responses = await Promise.all(activeUser.cart.products.map((product) => fetchProduct(product.productId)
                .then((response) => {
                    return { product: response, amount: product.quantity }
                })))
            setProductsInCart(responses)
        }
    }

    useEffect(() => {
        fetchAllProducts()
    }, [activeUser.cart?.products])

    const showBtn = () => {
        visible === 'none' ?
            setVisible('flex') :
            setVisible('none')
    }


    return (
        <div className={`${style.container} col-xs-8 col-sm-8 col-md-6 col-lg-4`}>
            <div className={style.btn}>
                <button onClick={e => navigate(`/cart/${activeUser.cart?.id}`)}>Go to cart</button>
                <button onClick={showBtn}>Show cart</button>
            </div>
            <div style={{ display: visible }} className={style.products}>
                {productsInCart ? productsInCart.map((item: { product: ICard, amount: number }) => (
                    <Product
                        product={item.product}
                        amount={item.amount}
                    />
                )) : null}

            </div>
        </div>
    )
}

export default Cart