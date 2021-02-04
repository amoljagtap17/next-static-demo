import useSWR from 'swr'
import { List, Divider } from 'antd'
import { fetcher } from 'utils/fetcher'

export const BlogList = () => {
  const { data: blogs, error } = useSWR(
    'http://localhost:8000/posts',
    fetcher,
    {
      dedupingInterval: 1000 * 60 * 60,
    }
  )

  if (error) return <div>failed to load</div>

  return (
    <>
      <List
        size="large"
        loading={!blogs}
        dataSource={blogs}
        renderItem={({ title, id }) => (
          <List.Item actions={[<a key="list-loadmore-edit">edit</a>]} key={id}>
            {title}
          </List.Item>
        )}
      />
    </>
  )
}
