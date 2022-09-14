import { Form, Input } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkAuth } from '../../../../store/ducks/activeUser/asyncAction'
import { useAppDispatch } from '../../../../store/hooks'
import style from './SignIn.module.scss'

const SignIn: FC = () => {
    
    const dispatch = useAppDispatch()
    const navigation = useNavigate()

    const onFinish = async (value: Record<string, any>) => {
       const response = await dispatch(checkAuth(value))
        if (response.meta.requestStatus === 'fulfilled') {
            navigation('/main')
        }
    }

    return (
        <div className={style.container}>
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
                <div>
                    <button type='submit'>Sign In</button>
                </div>
            </Form>
        </div>
    )
}

export default SignIn