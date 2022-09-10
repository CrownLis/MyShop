import React, { FC, useEffect, useState } from 'react'
import { getCardsProducts, getLoadingCards } from '../../../../store/ducks/cards/selectors'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { getCardsByCategory } from '../../../../store/ducks/cards/asyncAction'
import Card from './Card/Card'
import { useParams } from 'react-router-dom'
import { sortCards } from '../../../../store/ducks/cards/cardsSlice'
import arrowTop from './../../../../assets/img/arrowtop.png'
import arrowBot from './../../../../assets/img/arrowbot.png'

import style from './Cards.module.scss'
import { Spin } from 'antd'
import Loader from '../../Loader/Loader'



const Cards: FC = () => {

    const cards = useAppSelector(getCardsProducts)
    const isLoading = useAppSelector(getLoadingCards)
    const dispatch = useAppDispatch()
    const { category } = useParams()
    const [sort, setSort] = useState('Price')
    const [SortFromLargest, setSortFromLargest] = useState('off')

    const sortBtn = (SortFromLargest: string) => {
        SortFromLargest === 'on' ? setSortFromLargest('off') : setSortFromLargest('on')
    }

    useEffect(() => {
        dispatch(getCardsByCategory(`${category}`))
    }, [category])

    useEffect(() => {
        dispatch(sortCards([sort, SortFromLargest]))
    }, [sort, SortFromLargest])

    return (
        isLoading ? <Loader/> : (
            <div className={style.container}>
                <div className={style.sort}>
                    <div className={style.select}>
                        <select onChange={e => setSort(e.target.value)} value={sort}>
                            <option>Price</option>
                            <option>Rating</option>
                        </select>
                    </div>
                    <div className={style.checkbox}>
                        <label>
                            <input type='checkbox' onChange={e => sortBtn(SortFromLargest)} value={SortFromLargest} />
                            {SortFromLargest === 'on' ?
                                <img className={style.fake} src={arrowTop}></img> :
                                <img className={style.fake} src={arrowBot}></img>}
                        </label>
                    </div>
                </div>
                <div className={style.cards}>
                    {cards && cards.length > 0 ? (
                       <div className={style.card}>
                       {cards?.map((p: { id: number, title: string, price: number, description: string, category: string, image: string, rating: { count: number, rate: number } }) => (

                           <Card
                               id={p.id}
                               title={p.title}
                               price={p.price}
                               description={p.description}
                               category={p.category}
                               image={p.image}
                               rating={p.rating} />
   
                       ))
                       }
                       </div>
                    ) : (
                        <div>Product is empty</div>
                    )
                }
                </div>
            </div>
        )
    )
}

export default Cards