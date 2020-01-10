import {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'

const {Header, Footer, Sider, Content} = Layout

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={200} style={{minHeight: '100vh', color: 'white'}}>
          <div style={{height: '32px', margin: '16px', backgroundColor: 'rgba(255,255,255, .2)'}}></div>
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
            theme="dark"
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>第一个菜单</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="area-chart" />
              <span>第二个菜单</span>
            </Menu.Item>
            <Menu.SubMenu
              title={<span><Icon type="radar-chart" /><span>含二级子菜单</span> </span>}
            >
              <Menu.Item key="3">
                <Icon type="box-plot" />
                <span>第三个菜单</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="sliders" />
                <span>第四个菜单</span>
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
