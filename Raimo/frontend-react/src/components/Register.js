import axios from 'axios';
import {useState} from 'react'
import { Form, Input, Button } from 'antd';


function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const formItemLayout = {
        labelCol: {
        xs: { span: 14 },
        sm: { span: 6 },
    },
        wrapperCol: {
        xs: { span: 14 },
        sm: { span: 6 },
    },
    };
    const tailFormItemLayout = {
        wrapperCol: {
        xs: {
        span: 14,
        offset: 0,
        },
        sm: {
        span: 10,
        offset: 6,
        },
        },
    };

    const handleSubmit = () => {
        
        axios.post("http://localhost:8081/api/auth/signup", {
            firstName,
            lastName,
            email,
            password
        }).then((response) => {
            console.log(JSON.stringify(response.data));
        })
    }

    return(
            <Form
                {...formItemLayout}
                name="register"
                onFinish={handleSubmit}>
                <Form.Item
                    label="Eesnimi"
                    name="firstName"
                    rules={[
                    {
                    required: true,
                    message: 'sisesta enda eesnimi!' 
                    }
                    ]}>
                    <Input onChange={(e) => setFirstName(e.target.value)} />
                </Form.Item>
                
                <Form.Item
                    label="Perekonnanimi"
                    name="lastName"
                    rules={[
                    {
                    required: true,
                    message: 'Sisesta enda perekonnanimi!' 
                    }
                    ]}>
                    <Input onChange={(e) => setLastName(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                    },
                    {
                    required: true,
                    message: 'Please input your E-mail!',
                    },
                    ]}>
                    <Input onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback>
                    <Input.Password onChange={(e) => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Password uuesti"
                    dependencies={['password']}
                    hasFeedback
                    rules={[{
                    required: true,
                    message: 'Please confirm your password!',},
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();}
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));},}),]}>
                    <Input.Password/>
                </Form.Item>
                
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
    )
}

export default Register;