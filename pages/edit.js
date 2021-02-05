import { useRouter } from 'next/router'
import useSWR, { mutate } from 'swr'
import { instance, fetcher } from 'utils/fetcher'
import { Heading } from 'components/Heading'
import { NextForm } from 'components/NextForm'

export default function Create() {
  const router = useRouter()

  const { id } = router.query

  const { data: blog } = useSWR(`/blogs/${id}`, fetcher, {
    dedupingInterval: 1000 * 60 * 60,
  })

  return (
    <>
      <Heading title="Edit Blog" />
      <NextForm initialValues={blog} />
    </>
  )
}
