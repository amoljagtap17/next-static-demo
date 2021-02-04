import 'antd/dist/antd.min.css'
import Link from 'next/link'
import { Layout, Menu } from 'antd'
import '../styles/globals.css'

const Container = ({ children }) => {
  const { Header, Footer, Content } = Layout

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/create">
              <a>Create Post</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
