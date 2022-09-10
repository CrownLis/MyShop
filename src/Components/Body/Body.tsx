import React from "react";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Cards from "./CategoryCards/Cards";
import Main from "./Main/Main";
import Product from "./Product/Product";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

import style from './Body.module.scss'
import ClientProfile from "./ClientProfile/ClientProfile";
import Cart from "./Cart/Cart";
import ModalWindow from "./Product/Modal/ModalWindow";

const Body: FC = () => {
    return (
        <div className={style.container}>
            <Routes>
                <Route path="/:category" element={<Cards />} />
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