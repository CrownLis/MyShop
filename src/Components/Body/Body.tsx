import React from "react";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import style from './Body.module.scss'
import Cart from "./Cart";
import CategoryCards from "./CategoryCards";
import ClientProfile from "./ClientProfile";
import Main from "./Main";
import Product from "./Product";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


const Body: FC = () => {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/:category" element={<CategoryCards />} />
                <Route path="/main" element={<Main />} />
                <Route path='/:category/:id' element={<Product />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/profile/:id' element={<ClientProfile/>} />
                <Route path='/cart/:id' element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default Body