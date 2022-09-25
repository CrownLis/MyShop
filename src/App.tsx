import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './../assets/normalize.scss'
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import style from './App.module.scss'
import 'antd/dist/antd.css'
import './../normalize.css'
import { fetchAllUsers } from '../store/ducks/users/asyncAction';
import { useAppDispatch } from '../store/hooks';
import { fetchAllProducts } from '../store/ducks/allProducts/asyncAction';




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