import Head from 'next/head'
import { BlogList } from 'components/BlogList'
import { Heading } from 'components/Heading'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home!</title>
      </Head>
      <Heading title="Blog List" />
      <BlogList />
    </>
  )
}
