import 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import '../styles/globals.css'

const Container = ({ children }) => {
  const { Header, Footer, Content } = Layout

  return (
    <Layout>
      <Header>Header</Header>
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
