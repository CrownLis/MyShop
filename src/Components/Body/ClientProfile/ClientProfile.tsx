import React, { FC } from 'react'
import Cart from './Cart/Cart'
import style from './ClientProfile.module.scss'
import Info from './Info/Info'



const ClientProfile: FC = () => {


    return (
        <div className={style.container}>
           <Info/>
           <Cart/>
        </div >
    )
}

export default ClientProfile