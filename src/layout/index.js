import {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'umi'

const {Header, Footer, Sider, Content} = Layout



class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={200} style={{minHeight: '100vh', overflow: 'scroll', color: 'white'}}>
          <div style={{height: '32px', margin: '16px', backgroundColor: 'rgba(255,255,255, .2)'}}></div>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1">
              <Link to="/helloword">
                <Icon type="pie-chart" />
                <span>第一个菜单</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/404">
                <Icon type="area-chart" />
                <span>404Page</span>
              </Link>
            </Menu.Item>
            <Menu.SubMenu
              title={<span><Icon type="radar-chart" /><span>DashBoard</span> </span>}
            >
              <Menu.Item key="3">
                <Link to="/dashboard/analysis">
                  <Icon type="box-plot" />
                  <span>分析页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/dashboard/monitor">
                  <Icon type="sliders" />
                  <span>监控页</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/dashboard/workspace">
                  <Icon type="sliders" />
                  <span>工作台</span>
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{backgroundColor: '#fff', textAlign: 'center', padding: 0}}>header</Header>
          <Content style={{margin: '24px 16px 0'}}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>guozheng@20200110</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
