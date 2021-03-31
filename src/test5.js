
import React ,{useState,useEffect,createContext,useContext} from 'react'

/**
 createContext 创建上下文； 就是树的上下文
 
 他创建的就是 共享数据组件 .Provider 就是提供器

 useContext

 */ 
const  CountContext = createContext();

function Counter(){
    let count = useContext(CountContext)
    return (<h2>{count}</h2>)
}
function Example(){
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     console.log(`useEffect=> you click ${count}`)
    //     return ()=>{
    //         console.log('===================')
    //     }
    // },[])
    return(
        <div>
            <p>you clicked {count}times</p>
            <button onClick={()=>{setCount(count+1)}}>clcik Me</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

export default Example;
