import React, { FC } from "react";
import Categories from "./Categories/Categories";
import TopHeader from "./TopHeader/TopHeader";

import style from './Header.module.scss'

const Header: FC = () => {

    return (
        <div className={style.header}>
            <TopHeader />
            <Categories />
        </div>
    )
}

export default Header