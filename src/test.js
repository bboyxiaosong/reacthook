
// hook 函数与生命周期组件的区别
// import React ,{Component} from 'react'
// class Example extends Component{
//     constructor(props){
//         super(props)
//         this.state = {count:0}
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


import React ,{useState} from 'react'

function Example(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>you clicked {count}times</p>
            <button onClick={()=>{setCount(count+1)}}>clcik Me</button>
        </div>
    )
}

export default Example;