import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './../assets/normalize.scss'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';

import style from './App.module.scss'
import { fetchAllUsers } from '../store/ducks/users/asyncAction';
import { getAllUsers } from '../store/ducks/users/selectors'
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchAllCarts } from '../store/ducks/carts/asyncAction';




export const App: FC = () => {

const dispatch = useAppDispatch()


useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchAllCarts())
},[])

return (
    <BrowserRouter>
        <div style={{maxWidth:1280}} className={style.container}>
            <Header />
            <Body/>
        </div>
    </BrowserRouter>
);
}

export default App