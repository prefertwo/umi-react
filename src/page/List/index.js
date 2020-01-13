import React, {Component} from 'react'
import {connect} from 'dva'
import {Table, Button, Modal, Form, Input} from 'antd'
import SampleChart from '../../component/SampleChart'


const FormItem = Form.Item;

function mapStateToProps(state) {
  return {
    cardsList: state.cards.cardsList,
    cardsLoading: state.loading.effects['cards/queryList'],
    statistic: state.cards.statistic
  }
}

class List extends Component {

  state = {
    visible: false,
    statisticVisible: false,
    id: null
  }

  columns = [
    {
      title: '名称',
      dataIndex: 'name',
    },{
      title: '描述',
      dataIndex: 'desc',
    }, {
      title: '链接',
      dataIndex: 'url',
      render: value => <a href={value}>{value}</a>
    }, {
      title: '',
      dataIndex: '_',
      render: (_, {id}) => {
        return (
          <Button onClick={() => {this.showStatistic(id)}}>图表</Button>
        )
      }
    }
  ]

  componentDidMount() {
    this.props.dispatch({
      type: 'cards/queryList'
    })
  }

  showModal = () => {
    this.setState({visible: true})
  }

  handleCancel = () => {
    this.setState({visible: false})
  }

  handleOk = (e) => {
    const {dispatch, form: {validateFields}} = this.props;

    validateFields(
      (error, values) => {
        if(!error) {
          dispatch({
            type: 'cards/addOne',
            payload: values
          })

          this.setState({visible: false});
        }
      }
    )
  }

  showStatistic = (id) => {
    console.log(id);
    
    const {dispatch} = this.props;
    dispatch({
      type: 'cards/getStatistic',
      payload: id,
    })

    this.setState({
      id,
      statisticVisible: true
    })
  }

  handleStatisticCancel = () => {
    this.setState({
      statisticVisible: false
    })
  }
  
  render() {
    const {cardsList, cardsLoading, form: {getFieldDecorator}, statistic} = this.props;
    const {visible, statisticVisible, id} = this.state;
    console.log(id, statistic);
    
    return(
      <div>
        <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey={record => { return record.id }} ></Table>

        <Button type="primayr" onClick={this.showModal} >新建记录</Button>

        <Modal
          title="图表展示"
          visible={statisticVisible}
          onCancel={this.handleStatisticCancel}
        >
          <SampleChart data={statistic[id]} />
        </Modal>

        <Modal
          title="新建记录"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <FormItem label="名称" >
              {getFieldDecorator('name', {
                rules: [{require: true}]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="描述">
              {getFieldDecorator('desc')(
                <Input />
              )}
            </FormItem>
            <FormItem label="链接">
              {getFieldDecorator('url', {
                rules: [{type: 'url'}]
              })(
                <Input />
              )}
            </FormItem>
          </Form>
        </Modal>
        
      </div>
    )
  }
}

export default connect(mapStateToProps)(Form.create()(List));
