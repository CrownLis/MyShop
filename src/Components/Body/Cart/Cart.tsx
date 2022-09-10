import { Form, Input } from 'antd';
import React, { FC, useEffect, useState } from 'react'
import { getProductById } from '../../../../API/shopAPI';
import { getActiveUser } from '../../../../store/ducks/activeUser/selectors';
import { useAppSelector } from '../../../../store/hooks';
import { ICard, IProductInCart } from '../../../../types/types';
import Loader from '../../Loader/Loader';
import Product from '../ClientProfile/Cart/Product/Product'

import style from './Cart.module.scss'

const Cart: FC = () => {

    const activeUser = useAppSelector(getActiveUser);
    const [productsInCart, setProductsInCart] = useState<IProductInCart[]>()
    const [card, setCard] = useState(true)
    const [delivery, setDelivery] = useState(true)
    const [total, setTotal] = useState(0)


    const fetchProduct = async (id: number) => {
        const product = await getProductById(id)
        return product.data
    }

    const totalPrice = (cart: IProductInCart[]) => {
        const total = cart.reduce((total: number, currentItem: IProductInCart) => total + (currentItem.amount * currentItem.product.price), 0)
        setTotal(total)
    }

    const fetchAllProducts = async () => {
        if (activeUser && activeUser.cart && activeUser.cart.products) {
            const responses = await Promise.all(activeUser.cart.products.map((product) => fetchProduct(product.productId)
                .then((response) => {
                    return { product: response, amount: product.quantity }
                })))
            setProductsInCart(responses)
            totalPrice(responses)
        }
    }



    useEffect(() => {
        fetchAllProducts()
    }, [activeUser.cart?.products])

    return (
        productsInCart ? <div className={style.container}>
            <div className={style.products}>
                {productsInCart ? productsInCart.map((item: { product: ICard, amount: number }) => (
                    <Product
                        product={item.product}
                        amount={item.amount}
                    />
                )) : null}
            </div>
            <div className={style.form}>
                <h4>Total:{total}$</h4>
                <div className={style.btnFirst}>
                    <label htmlFor='delivery1' style={!delivery ? { color: '#ffffd5' } : {}}>Pickup</label>
                    <input type='radio' name='delivery' id='delivery1' onClick={e => setDelivery(false)}></input>
                    <label htmlFor='delivery2' style={delivery ? { color: '#ffffd5' } : {}}>Delivery</label>
                    <input type='radio' name='delivery' id='delivery2' onClick={e => setDelivery(true)}></input>
                </div>
                <div className={style.btnSecond}>
                    <label htmlFor='payment1' style={card ? { color: '#ffffd5' } : {}}>Bank card</label>
                    <input type='radio' name='payment' id='payment1' onClick={e => setCard(true)}></input>
                    <label htmlFor='payment2' style={!card ? { color: '#ffffd5' } : {}}>Cash</label>
                    <input type='radio' name='payment' id='payment2' onClick={e => setCard(false)}></input>
                </div>
                <Form>
                    {delivery ?
                        <div>
                            <Form.Item
                                label="city"
                                initialValue={activeUser?.activeUser?.address?.city}
                                name={['address', 'city']}
                                rules={[{ required: false },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="street"
                                initialValue={activeUser?.activeUser?.address?.street}
                                name={['address', 'street']}
                                rules={[{ required: false },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="street number"
                                initialValue={activeUser?.activeUser?.address?.number}
                                name={['address', 'number']}
                                rules={[{ required: false },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        : null}
                        <button type='submit'>Buy</button>
                </Form>
            </div>
        </div> : <Loader/>
    )
}

export default Cart