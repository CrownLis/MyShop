import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppDispatch } from './store/hooks';
import { fetchAllUsers } from './store/users/asyncAction';
import { fetchAllProducts } from './store/allProducts/asyncAction';
import Header from './Components/Header';
import Body from './Components/Body/Body';

import style from './App.module.scss'
import './assets/normalize.scss'
import 'antd/dist/antd.css'





export const App: FC = () => {

const dispatch = useAppDispatch()


useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchAllProducts())
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