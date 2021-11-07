import { useContext } from "react"
import {Context} from "../store"
import { Form, Input, Button } from 'antd';

function Posts() {
    const [state, dispatch] = useContext(Context)

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


    const handleSubmit = e => {
      const newPost = {
        title: e.title,
        desc: e.desc,
        user: state.auth.user,
        createdAt: new Date(Date.now())
      }
      addPost(newPost);
    }


    const addPost = async (post) => {
      const response = await fetch('http://localhost:8081/api/post/create', {
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(post),
        method: 'POST',
      })
        const data = await response.json()
        dispatch(addPost(data))
    }
    


  return (
    <>
      {state.auth.token && 
        <Form 
          {...formItemLayout}
          name="addpost"
          onFinish={handleSubmit}>

        <Form.Item
          label="Title" 
          name="title"
          rules={[
          {
            type: "string",
            message: 'The input is empty',
          },
          {
            required: true,
            message: 'Please input your title',
          },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item 
          label="desc" 
          name="desc"
          rules={[
          {
            type: "string",
            message: 'The input is empty',
          },
          {
            required: true,
            message: 'Please input your post description',
          },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
        }
        </>
    )
}

export default Posts;