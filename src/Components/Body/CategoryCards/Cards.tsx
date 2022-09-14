import React, { FC, useEffect, useState } from 'react'
import { getCardsProducts, getLoadingCards } from '../../../../store/ducks/cards/selectors'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import { getCardsByCategory } from '../../../../store/ducks/cards/asyncAction'
import Card from './Card/Card'
import { useParams } from 'react-router-dom'
import { sortCards } from '../../../../store/ducks/cards/cardsSlice'
import arrowTop from './../../../../assets/img/arrowtop.png'
import arrowBot from './../../../../assets/img/arrowbot.png'
import { getAllCardsProducts, getLoadingAllProducts } from './../../../../store/ducks/allProducts/selectors'

import style from './Cards.module.scss'
import { Pagination } from 'antd'
import Loader from '../../Loader/Loader'
import { sortAllProducts } from '../../../../store/ducks/allProducts/allProductsSlice'



const Cards: FC = () => {

    const dispatch = useAppDispatch()
    const { category } = useParams()

    const allProducts = useAppSelector(getAllCardsProducts)
    const cards = useAppSelector(getCardsProducts)
    const isLoading = category === 'all'? useAppSelector(getLoadingAllProducts) : useAppSelector(getLoadingCards)

    const [sort, setSort] = useState('Price')
    const [SortFromLargest, setSortFromLargest] = useState('off')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemOnPage] = useState(8)

    const lastItem = currentPage * itemOnPage
    const firstItem = lastItem - itemOnPage
    const currentItems = category === 'all' ? allProducts?.slice(firstItem, lastItem) : cards?.slice(firstItem, lastItem)

    const sortBtn = (SortFromLargest: string) => {
        SortFromLargest === 'on' ? setSortFromLargest('off') : setSortFromLargest('on')
    }

    useEffect(() => {
        if (category !== 'all') {
            dispatch(getCardsByCategory(`${category}`))
        }
        setCurrentPage(1)
    }, [category])

    useEffect(() => {
        dispatch(sortCards([sort, SortFromLargest]))
        dispatch(sortAllProducts([sort,SortFromLargest]))
    }, [sort, SortFromLargest])

    return (
        isLoading ? <Loader /> : (
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
                    {currentItems && currentItems.length > 0 ? (
                        <div className={style.card}>
                            {currentItems?.map((p:
                                {
                                    id: number,
                                    title: string,
                                    price: number,
                                    description: string,
                                    category: string,
                                    image: string,
                                    rating: { count: number, rate: number }
                                }) => (

                                <Card
                                    id={p.id}
                                    title={p.title}
                                    price={p.price}
                                    description={p.description}
                                    category={p.category}
                                    image={p.image}
                                    rating={p.rating} />

                            ))}
                        </div>
                    ) : (
                        <div>Product is empty</div>
                    )
                    }
                    <Pagination
                        defaultCurrent={1}
                        current={currentPage}
                        total={category === 'all' ? allProducts?.length : cards?.length}
                        pageSize={itemOnPage}
                        onChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>
        )
    )
}

export default Cards