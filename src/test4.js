
import React ,{useState,useEffect} from 'react'

import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
/*
 useEffect 第二个参数是 解绑值 如果发生变化的话组件会更新
 useEffect 里边加一个 return 是离开组件时候 改变的
 那到底要如何实现类似componentWillUnmount的效果那?
 这就需要请出useEffect的第二个参数，它是一个数组，
 数组中可以写入很多状态对应的变量，意思是当状态值发生变化时，
 我们才进行解绑。但是当传空数组[]时，就是当组件将被销毁时才进行解绑，
 这也就实现了componentWillUnmount的生命周期函数。
*/

function Index(){
    useEffect(()=>{
        console.log('来了老弟,首页')
        return ()=>{
            console.log('老弟走了，在首页')
        }
    },[])
    return <h2> 首页 啦啦队</h2>
}
function List(){
    useEffect(()=>{
        console.log('来了老弟 这是列表页')
        return ()=>{
            console.log('老弟走了，列表页')
        }
    },[])
    return <h2>list Page</h2>
}

function Example(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect=> you click ${count}`)
        return ()=>{
            console.log('===================')
        }
    },[])
    return(
        <div>
            <p>you clicked {count}times</p>
            <button onClick={()=>{setCount(count+1)}}>clcik Me</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表页</Link></li>
                </ul>
                <Route path="/" exact component={Index}/>
                <Route path="/list/" exact component={List}/>
            </Router>
        </div>
    )
}

export default Example;