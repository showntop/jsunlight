import { REQUEST_USERS, RECEIVE_USERS } from 'constants/ActionTypes';

import fetch           from 'isomorphic-fetch'

function requestUsers () {
  return { type : REQUEST_USERS };
}


function receiveUsers (result) {
  return { type : RECEIVE_USERS, items: result.users };
}

export function fetchUsers () {

    // Thunk middleware 知道如何处理函数。
    // 这里把 dispatch 方法通过参数的形式传给函数，
    // 以此来让它自己也能 dispatch action。

    return function (dispatch) {

      // 首次 dispatch：更新应用的 state 来通知
      // API 请求发起了。

      dispatch(requestUsers())

      // thunk middleware 调用的函数可以有返回值，
      // 它会被当作 dispatch 方法的返回值传递。

      // 这个案例中，我们返回一个等待处理的 promise。
      // 这并不是 redux middleware 所必须的，但这对于我们而言很方便。
      return fetch('http://localhost:3000/v1/users.json',{ 'Access-Control-Allow-Origin': '*' })
        .then(response => response.json())
        .then(json =>

          // 可以多次 dispatch！
          // 这里，使用 API 请求结果来更新应用的 state。

          dispatch(receiveUsers(json))
        )

        // 在实际应用中，还需要
        // 捕获网络请求的异常。
    }
  }
