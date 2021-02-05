import useSWR from 'swr'
import Link from 'next/link'
import { List } from 'antd'
import { fetcher } from 'utils/fetcher'

export const BlogList = () => {
  const { data: blogs, error } = useSWR('/blogs', fetcher, {
    dedupingInterval: 1000 * 60 * 60,
  })

  if (error) return <div>failed to load</div>

  return (
    <>
      <List
        size="large"
        loading={!blogs}
        dataSource={blogs}
        renderItem={({ title, id }) => (
          <List.Item
            actions={[
              <Link href={`/edit?id=${id}`}>
                <a key="list-loadmore-edit">Edit</a>
              </Link>,
            ]}
            key={id}
          >
            {title}
          </List.Item>
        )}
      />
    </>
  )
}
