import { Form, Input } from 'antd'
import React, { FC, useState } from 'react'
import { editUser } from '../../../../../store/ducks/activeUser/asyncAction'
import { getActiveUserData } from '../../../../../store/ducks/activeUser/selectors'
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks'
import { IUser } from '../../../../../types/types'

import style from './Info.module.scss'

const Info: FC = () => {

    const dispatch = useAppDispatch()
    const activeUser = useAppSelector(getActiveUserData)
    const [visible, setVisible] = useState('none')
    const [visibleButton, setVisibleButton] = useState('inline-block')
    const [visibleEditBtn, setVisibleEditBtn] = useState('block')
    const [visibleSaveBtn, setVisibleSaveBtn] = useState('none')
    const [edit, setEdit] = useState(true)

    const editInfo = () => {
        setEdit(!edit)
        setVisibleEditBtn('none')
        setVisibleSaveBtn('block')
    }

    const moreInfo = () => {
        setVisible('flex')
        setVisibleButton('none')
    }

    const hideMoreInfo = () => {
        setVisible('none')
        setVisibleButton('inline-block')
    }

    const onSubmit = (value: IUser) => {
        if (activeUser) {
            setEdit(!edit)
            dispatch(editUser([activeUser?.id, value]))
            setVisibleEditBtn('block')
            setVisibleSaveBtn('none')
        }
    }

    return (
        <div className={style.container}>
            <div>
                <h2>Info about you</h2>
                <Form
                    onFinish={onSubmit}
                >
                    <Form.Item
                        label="firstname"
                        initialValue={activeUser?.name?.firstname}
                        name={['name', 'firstname']}
                        rules={[{ required: true, message: 'Please input your firstname!' },
                        { type: 'string' }
                        ]}
                    >
                        <Input readOnly={edit} />
                    </Form.Item>
                    <Form.Item
                        label="lastname"
                        initialValue={activeUser?.name?.lastname}
                        name={['name', 'lastname']}
                        rules={[{ required: true, message: 'Please input your lastname!' },
                        { type: 'string' }
                        ]}
                    >
                        <Input readOnly={edit} />
                    </Form.Item>
                    <Form.Item
                        label="email"
                        initialValue={activeUser?.email}
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' },
                        { type: 'email' }
                        ]}
                    >
                        <Input readOnly />
                    </Form.Item>
                    <div>
                    <button onClick={moreInfo} style={{ display: visibleButton }} type='button'>More</button>
                    </div>
                    <div style={{ display: visible }}>
                        <Form.Item
                            label="city"
                            initialValue={activeUser?.address?.city}
                            name={['address', 'city']}
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                        <Form.Item
                            label="street"
                            initialValue={activeUser?.address?.street}
                            name={['address', 'street']}
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                        <Form.Item
                            label="street number"
                            initialValue={activeUser?.address?.number}
                            name={['address', 'number']}
                            rules={[{ required: false },
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                        <Form.Item
                            label="zipcode"
                            initialValue={activeUser?.address?.zipcode}
                            name={['address', 'zipcode']}
                            rules={[{ required: false },
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                        <Form.Item
                            label="Geolocation"
                            initialValue={activeUser?.address?.geolocation.lat}
                            name={['address', 'geolocation', 'lat']}
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                        <Form.Item
                            label="Geolocation"
                            initialValue={activeUser?.address?.geolocation.long}
                            name={['address', 'geolocation', 'long']}
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                        <Form.Item
                            label="phone"
                            initialValue={activeUser?.phone}
                            name='phone'
                            rules={[{ required: false },
                            { type: 'string' }
                            ]}
                        >
                            <Input readOnly={edit} />
                        </Form.Item>
                    </div>
                    <div style={{ display: visible }}>
                        <button onClick={editInfo} type='button' style={{ display: visibleEditBtn }}>edit</button>
                        <button type='submit' style={{ display: visibleSaveBtn }} >save</button>
                        <button onClick={hideMoreInfo} type='button'>hide</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Info