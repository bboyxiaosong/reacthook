/**
useEffect hook 函数解释
useEffect = componentDidMount componentDidUpdate 这个两个生命周期函数f

*/ 


// import React ,{Component} from 'react'
// class Example extends Component{
//     constructor(props){
//         super(props)
//         this.state = {count:0}
//     }
//     componentDidMount(){
//         console.log(`componentDidMount=> you click ${this.state.count}`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate=> you click ${this.state.count}`)
//     }
//     render(){
//         return(
//             <div>
//             <p>{this.state.count} times</p>
//             <button onClick={this.addCount.bind(this)}> Click me</button>
//             </div>
//         )
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }


// export default Example


import React ,{useState,useEffect} from 'react'

function Example(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect=> you click ${count}`)
    })
    return(
        <div>
            <p>you clicked {count}times</p>
            <button onClick={()=>{setCount(count+1)}}>clcik Me</button>
        </div>
    )
}

export default Example;