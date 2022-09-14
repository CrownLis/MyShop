import React, { FC, useEffect, useState } from "react"
import { ICard } from "../../../../types/types"

import style from './ModalWindowProduct.module.scss'

interface ModalWindowProductProps {
    product: ICard
}

const ModalWindowProduct: FC<ModalWindowProductProps> = (product) => {



    return (
            <div className={style.product}>
                <div>
                   <span>{product.product.title}</span> 
                </div>
                <div>
                    <img src={product.product.image}></img>
                </div>
                <div>
                    {product.product.price}$
                </div>
            </div>
    )
}

export default ModalWindowProduct