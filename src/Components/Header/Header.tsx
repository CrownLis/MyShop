import React from "react";
import { FC } from "react";
import style from './Header.module.scss'
import Logo from './../../../assets/img/logo.svg'
import Categories from "./Categories/Categories";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { getActiveUser, getActiveUserData } from "../../../store/ducks/activeUser/selectors";

const Header: FC = () => {

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
                    <input placeholder={`Search for products, brands and more`} />
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