import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { Form, Input, Button, Typography, Divider } from 'antd'

const { Title } = Typography

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 14,
  },
}

export default function Create() {
  const onFinish = async (values) => {
    const { title, content } = values
    const id = uuidv4()

    console.log('Success:', values)

    await axios.post('http://localhost:8000/posts', {
      id,
      title,
      content,
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Typography>
        <Title>Create Blog</Title>
        <Divider />
      </Typography>
      <Form
        {...layout}
        name="createPost"
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Blog Title"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please provide blog title!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Blog Content"
          name="content"
          rules={[
            {
              required: true,
              message: 'Please provide blog content!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
