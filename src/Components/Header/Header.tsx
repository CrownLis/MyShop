import React, { useState } from "react";
import { FC } from "react";
import style from './Header.module.scss'
import Logo from './../../../assets/img/logo.svg'
import Categories from "./Categories/Categories";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { getActiveUser } from "../../../store/ducks/activeUser/selectors";
import { getAllCardsProducts } from "../../../store/ducks/allProducts/selectors";
import { ICard } from "../../../types/types";
import ModalWindowProduct from "./ModalWindowProduct/ModalWindowProduct";

const Header: FC = () => {

    const [foundProducts, setFoundProducts] = useState<ICard[]>([])
    const [display,setDisplay] = useState('none')
    const [findWord, setFindWord] = useState('')
    const allProducts = useAppSelector(getAllCardsProducts)

    const find = (value: string) => {
        if (allProducts) {
            setFindWord(value)
            const x = allProducts.filter(a => a.title.includes(value[0].toUpperCase() + value.slice(1)))
            setFoundProducts(x)
        }
    }

    const activeUser = useAppSelector(getActiveUser)

    return (
        <div className={style.header}>
            <div className={style.container}>
                <div >
                    <NavLink to='/main' className={style.logo}>
                        <Logo />
                        <span>Shoppy <br /><span className={style.orange}>plus</span></span>
                    </NavLink>
                </div>
                <div className={style.input}>
                    <div>
                    <input placeholder={`Search for products, brands and more`} value={findWord} onChange={e => find(e.target.value)} />
                    </div>
                    <div className={style.modalWindows} style={{ display: findWord !== ''? 'grid' : 'none' }}>
                        {foundProducts.map(product =>
                            <ModalWindowProduct
                              product = {product}
                            />
                        )}
                    </div>
                </div>
                <nav className={style.navigation}>
                    <ul>
                        {activeUser.activeUser ?
                            <li><NavLink to={`/profile/${activeUser.activeUser?.id}`}>{activeUser.activeUser?.name?.firstname}</NavLink> </li> :
                            <li><NavLink to='/signIn'>Sign In</NavLink> </li>
                        }
                        {activeUser.activeUser ? <li><NavLink to={`/cart/${activeUser.cart?.id}`}>Cart</NavLink></li> :
                            <li><NavLink to='/signUp'>Sign up</NavLink></li>
                        }
                    </ul>
                </nav>
            </div>
            <Categories />
        </div>
    )
}

export default Header