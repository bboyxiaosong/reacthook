
import React, { useMemo, useState } from 'react'

/**
 * useMemo 主要解决 react 的一些性能问题
 * 
shouldComponentUpdate 组件更新之前

useMemo = shouldComponentUpdate
对比状态  需要 useEffect ; 父组件 状态个更新了 子组件()

 */

function TestMemo() {
    const [xiaohong,setXiaohong] = useState('小红')
    const [zhiling,setZhiling] = useState('志玲')

    return (
        <>
            <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={()=>{setZhiling(new Date().getTime()+'志玲来了')}}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent({name,children}){
    function Change(){
        console.log('她来了==>小红走来了')
        return name + '小红来了'
    }
    const actionXiaohong = useMemo(()=>Change(name),[name]) 
    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
    )
}



export default TestMemo;
