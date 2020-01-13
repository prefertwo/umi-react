import React, {Component} from 'react'
import {connect} from 'dva'
import {Card, Typography, Button } from 'antd'

const {Paragraph } = Typography;
const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    /* onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard
      }
      dispatch(action)
    } */
    
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`
      })
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCards extends Component {

  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>
                  <strong>Q: {card.setup}</strong>
                </div>
                <Paragraph ellipsis={{ rows: (card.id) %2 ==0?1:2}}>{card.punchline}</Paragraph>
              </Card>
            )
          })
        }
        <div>
          {/* <Button type="primary" onClick={() => this.props.onClickAdd({
            setup: 'this is a question?',
            punchline: '年终总结ojbk，年终总结ojbk。'
          })}>添加卡片</Button> */}
        </div>
      </div>
    )
  }
}