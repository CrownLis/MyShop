import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

import Electronics from './../../../../assets/img/Ellipse 4.jpg'
import Home from './../../../../assets/img/Ellipse 5.jpg'
import Appliances from './../../../../assets/img/Ellipse 6.jpg'
import Travel from './../../../../assets/img/Ellipse 7.jpg'
import All from './../../../../assets/img/all.png'
import style from './Categories.module.scss'

const Categories: FC = () => {
    return (
        <div className={style.categories}>
            <nav className="row justify-content-md-center">
                <NavLink to='/all' className={`${style.category} col-xs-1 col-sm-1 col-md-1 col-lg-1`}><img src={All} /><span>All</span></NavLink>
                <NavLink to='/electronics' className={`${style.category} col-xs-1 col-sm-1 col-md-1 col-lg-1`}> <img src={Electronics} /><span>Electronics</span></NavLink>
                <NavLink to='/jewelery' className={`${style.category} col-xs-1 col-sm-1 col-md-1 col-lg-1`}> <img src={Home} /><span>jewelery</span></NavLink>
                <NavLink to="/men's clothing" className={`${style.category} col-xs-1 col-sm-1 col-md-1 col-lg-1`}> <img src={Appliances} /><span>men's clothing</span></NavLink>
                <NavLink to="/women's clothing" className={`${style.category} col-xs-1 col-sm-1 col-md-1 col-lg-1`}> <img src={Travel}></img><span>women's clothing</span></NavLink>
            </nav>
        </div>
    )
}

export default Categories