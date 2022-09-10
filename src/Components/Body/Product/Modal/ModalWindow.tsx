import { Form, Input, Modal } from "antd";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../../../../../store/ducks/activeUser/asyncAction";
import { useAppDispatch } from "../../../../../store/hooks";

import style from './ModalWindow.module.scss'

interface ModalProps {
    visible:boolean
}

const ModalWindow: FC<ModalProps> = ({visible}) => {

    const dispatch = useAppDispatch()
    const [isModalVisible, setIsModalVisible] = useState(true);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (value: Record<string, any>) => {
        dispatch(checkAuth(value))
    }


    const navigate = useNavigate()

    return (

        <div className={style.container}>
            <Modal
                title="Basic Modal"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={true}
                footer={false}

            >
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' },
                        { type: 'string' }
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div>
                        <button type='submit'>Sign In</button>
                        <button type='button' onClick={e => navigate('/SignUp')}>Sign Up</button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default ModalWindow