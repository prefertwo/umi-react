import {Result, Button} from 'antd'

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visit is not exist"
      extra={<Button type="primary" >BackHome</Button>}
    ></Result>
  )
}