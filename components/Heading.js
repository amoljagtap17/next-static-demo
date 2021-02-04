import { Typography, Divider } from 'antd'

const { Title } = Typography

export const Heading = ({ title }) => {
  return (
    <Typography>
      <Title>{title}</Title>
      <Divider />
    </Typography>
  )
}
