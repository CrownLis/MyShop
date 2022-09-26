import { Form, Input } from 'antd'
import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../store/hooks'
import { register } from '../../../store/users/asyncAction'


import style from './SignUp.module.scss'

const SignUp: FC = () => {

    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const [visible, SetVisible] = useState('flex')
    const [visible2, SetVisible2] = useState('none')

    const handleNext = () => {
        SetVisible('none');
        SetVisible2('flex')
    }

    const handleBack = () => {
        SetVisible('flex');
        SetVisible2('none')
    }

    const onFinish = (value: Record<string, any>) => {
      dispatch(register(value))
    //   const {username, password} = user.arg
    //     dispatch(checkAuth({username, password}))
    navigation('/signIn')
    }

    return (
        <div className={style.container}>
            <Form
                onFinish={onFinish}
                onFinishFailed={handleBack}
            >
                <div className={style.firstForm} style={{display:visible}}>
                    <div>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' },
                            { type: 'email' }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="UserName"
                        name="username"
                        rules={[{ required: true, message: 'Please input username!' },
                        { type: 'string' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input Password!' },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </div>
                    <div>
                        <div>
                            <Form.Item
                                label="FirstName"
                                name={['name', 'firstname']}
                                rules={[{ required: true, message: 'Please input your firstName!' },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                label="LastName"
                                name={['name', 'lastname']}
                                rules={[{ required: true, message: 'Please input your lastName!' },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div>
                        <button type='button' onClick={handleNext}>Next</button>
                    </div>
                </div>
                <div className={style.secondForm} style={{display:visible2}}>
                    <div>
                        <Form.Item
                            label="city"
                            name={['address', 'city']}
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="street"
                        name={['address', 'street']}
                        rules={[{ required: false },
                        { type: 'string' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <div>
                        <Form.Item
                            label="number"
                            name={['address', 'number']}
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                        <div>
                            <Form.Item
                                label="zipcode"
                                name={['address', 'zipcode']}
                                rules={[{ required: false },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                label="Geolocation"
                                name={['address', 'geolocation', 'lat']}
                                rules={[{ required: false },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                label="Geolocation"
                                name={['address', 'geolocation', 'long']}
                                rules={[{ required: false },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                label="phone"
                                name='phone'
                                rules={[{ required: false },
                                { type: 'string' }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                    </div>
                    <div>
                    <button type='button' onClick={handleBack}>Back</button>
                        <button type='submit'>Sign up</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default SignUp