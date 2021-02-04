import { BlogList } from 'components/BlogList'
import { Heading } from 'components/Heading'

export default function Home() {
  return (
    <>
      <Heading title="Blog List" />
      <BlogList />
    </>
  )
}
