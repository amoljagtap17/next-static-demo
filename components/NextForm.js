import { useRouter } from 'next/router'
import { Form, Input, Button } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import useSWR, { mutate } from 'swr'
import { instance, fetcher } from 'utils/fetcher'

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

export const NextForm = ({ initialValues = {} }) => {
  const router = useRouter()

  const { data: blogs } = useSWR('/blogs', fetcher, {
    dedupingInterval: 1000 * 60 * 60,
  })

  const onFinish = async (values) => {
    const { id, title, content } = values

    if (id) {
      const { data: blog } = await instance.patch(`/blogs/${id}`, {
        title,
        content,
      })

      mutate('/blogs', [...blogs, { ...blog, title: 'edited...' }])

      if (blog) {
        router.push('/')
      }
    } else {
      const id = uuidv4()

      const { data: blog } = await instance.post('/blogs', {
        id,
        title,
        content,
      })

      console.log('Success:', values, blog)

      mutate('/blogs', [...blogs, { ...blog, title: 'updated...' }])

      if (blog) {
        router.push('/')
      }
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="createPost"
      initialValues={initialValues}
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
  )
}
