import { Form, Input, Button } from 'antd';
import { useState, useContext } from 'react'
import { Context } from '../store';
import { loginUser } from '../store/actions'
import axios from 'axios';

function Login() {

    const [state, dispatch] = useContext(Context);
    const [token, setToken] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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

    const handleSubmit = async () => {
        // ilma axios-eta tuleb konsooli viga "failed to fetch"
        const res = await axios.post('http://localhost:8081/api/auth/login', {
            email,
            password
        })

        .then((res) => {
        if (res) {
            const resp = res.data;
            console.log(JSON.stringify(resp));
            setToken(res.data.token);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
        }});

        const User = {
            token: token,
            user: firstName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        dispatch(loginUser(User));

        console.log(User);
    }

return (
    <div>
    <Form
        {...formItemLayout}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
    >
        <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, 
                message: 'Please input your username!' }]}
        >
            <Input onChange={e => {setEmail(e.target.value)}}/>
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, 
                message: 'Please input your password!' }]}
        >
            <Input.Password onChange={e => 
                {setPassword(e.target.value)
                }}/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
                submit
            </Button>
        </Form.Item>
    </Form>
    </div>
);
}

export default Login