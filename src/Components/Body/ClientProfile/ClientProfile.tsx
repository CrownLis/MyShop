import React, { FC } from 'react'
import Cart from './Cart'
import Info from './Info'

import style from './ClientProfile.module.scss'



const ClientProfile: FC = () => {


    return (
        <div className={`${style.container} row`}>
           <Info/>
           <Cart/>
        </div >
    )
}

export default ClientProfile