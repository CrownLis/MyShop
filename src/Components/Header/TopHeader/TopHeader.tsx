import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getActiveUser } from '../../../store/activeUser/selectors'
import { getAllCardsProducts } from '../../../store/allProducts/selectors'
import { useAppSelector } from '../../../store/hooks'
import { ICard } from '../../../types/types'
import Logo from './../../../../assets/img/logo.svg'
import ModalWindowProduct from '../ModalWindowProduct/ModalWindowProduct'

import style from './TopHeader.module.scss'


const TopHeader: FC = () => {

    const [foundProducts, setFoundProducts] = useState<ICard[]>([])
    const [findWord, setFindWord] = useState('')
    const allProducts = useAppSelector(getAllCardsProducts)
    const activeUser = useAppSelector(getActiveUser)

    const find = (value: string) => {
        if (allProducts) {
            setFindWord(value)
            const x = allProducts.filter(a => a.title.includes(value[0].toUpperCase() + value.slice(1)))
            setFoundProducts(x)
        }
    }


    return (
        <nav className={`${style.container} row`}>
            <div className={`${style.logo} col-xs-12 col-sm-12 col-md-2 col-lg-2`}>
                <NavLink to='/main' className={style.logo}>
                    <Logo />
                    <span>Shoppy <br /><span className={style.orange}>plus</span></span>
                </NavLink>
            </div>
            <div className={`${style.input} col-xs-12 col-sm-6 col-md-6 col-lg-6`}>
                    <input placeholder={`Search for products, brands and more`} value={findWord} onChange={e => find(e.target.value)} />
                <div className={style.modalWindows} style={{ display: findWord !== '' ? 'grid' : 'none' }}>
                    {foundProducts.map(product =>
                        <ModalWindowProduct
                            product={product}
                        />
                    )}
                </div>
            </div>
            <div className={`${style.navigation} col-xs-12 col-sm-12 col-md-3 col-lg-3`}>
                <ul>
                    {activeUser.activeUser ?
                        <li><NavLink to={`/profile/${activeUser.activeUser?.id}`}>{activeUser.activeUser?.name?.firstname}</NavLink> </li> :
                        <li><NavLink to='/signIn'>Sign In</NavLink> </li>
                    }
                    {activeUser.activeUser ? <li><NavLink to={`/cart/${activeUser.cart?.id}`}>Cart</NavLink></li> :
                        <li><NavLink to='/signUp'>Sign up</NavLink></li>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default TopHeader