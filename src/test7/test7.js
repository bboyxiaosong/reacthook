/*
使用 useReducer useContext  实现 Redux 

useContext 用它设置可以访问全局状态， 状态全局化
useReducer 传递一个action  实现redux 中的Reducer 

*/


import React from 'react'
import Buttons from './Buttons'
import { Color } from './color';
import ShowArea from './showArea'

function Example() {

    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example;