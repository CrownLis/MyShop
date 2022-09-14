import { Form, Input, Modal } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../../../../store/ducks/activeUser/asyncAction";
import { useAppDispatch } from "../../../../../store/hooks";

import style from './ModalWindow.module.scss'

interface ModalProps {
    visible:boolean
    setVisible:Function
}

const ModalWindow: FC<ModalProps> = ({visible,setVisible}) => {

    const dispatch = useAppDispatch()

    const handleCancel = () => {
        setVisible()
    };

    const onFinish = (value: Record<string, any>) => {
        dispatch(checkAuth(value))
        setVisible()
    }

    const navigate = useNavigate()

    return (

        <div className={style.container}>
            <Modal
            className='modalLogIn'
                title="Please login "
                visible={visible}
                onCancel={handleCancel}
                closable={true}
                footer={false}
                

            >
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' },
                        { type: 'string' }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div className={style.btn}>
                        <button type='submit'>Sign In</button>
                        <button type='button' onClick={e => navigate('/SignUp')}>Sign Up</button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalWindow