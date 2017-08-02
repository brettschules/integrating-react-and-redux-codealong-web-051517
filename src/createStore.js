import {render} from './index'
export default function
  createStore(reducer) {
    let state;

    function dispatch(action) {
      state = reducer(action, state)
      console.log(`the state is ${state.count}`)
      render()
    }

    function getState() {
      return state
    }

    return {
      dispatch,
      state
    }
  }
