
import React, { useState, useEffect, useReducer } from 'react'

/**
 * useReducer
 * 
 Reducer 兴起于Redux

 useReducer 一般都会传入两个值进来


 一般 useReducer 会与 useContext 结合使用

 */

// function countReducer(state, action) {
//     switch (action.type) {
//         case 'add':
//             return state + 1
//         case 'sub':
//             return state - 1
//         default:
//             return state
//     }
// }


function ReducerDemo() {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)

    return (
        <div>
            <p> numberIS{count}</p>
            <button onClick={() => { dispatch('add') }}>add</button>
            <button onClick={() => { dispatch('sub') }}>sub</button>
        </div>
    )
}

export default ReducerDemo;
