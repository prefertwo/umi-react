import request from '../util/request'

import {message} from 'antd'

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  })
}


export default {
  namespace: 'puzzlecards',
  state: {
    counter: 10,
    data: [],
    data2: [
      {
        id: 1,
        setup: 'this is set up description',
        punchline: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        design language for background applications, is refined by Ant UED Team. Ant Design, a design
        language for background applications, is refined by Ant UED Team.`
      }, {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: `Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        language for background applications, is refined by Ant UED Team.`
      }
    ]
  },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const {call, put} = sagaEffects;
      // const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
      const endPointURI = '/dev/random_joke'
      

      try {
        const puzzle = yield call(request, endPointURI);
        yield put({type: 'addNewCard', payload: puzzle});
        yield call(delay, 3000);
        const puzzle2 = yield call(request, endPointURI);
        yield put({type: 'addNewCard', payload: puzzle2});
      } catch(e) {
        message.error("数据获取失败")
      }
      


    }
  },
  reducers: {
    addNewCard(state, {payload: newCard}) {
      const nextCounter = state.counter + 1;
      const newCardWithId = {...newCard, id: nextCounter};
      const nextData = state.data.concat(newCardWithId);
      return {
        counter: nextCounter,
        data: nextData
      }

    }
  }
}