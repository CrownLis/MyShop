import React, { FC } from "react";
import Categories from "./Categories";
import TopHeader from "./TopHeader";

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