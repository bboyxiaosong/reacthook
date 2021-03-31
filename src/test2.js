
// seState 不能存在条件语句当中
import React, { useState } from 'react'
let showSex = true
function Example2() {
    const [age, setAge] = useState(18)
    // if(showSex){
    //     showSex = false
    const [sex, setSex] = useState('男')
    // }
    const [work, setWork] = useState('啦啦队')
    return (
        <div>
            <p>年龄 {age}times</p>
            <p>性别 {sex}times</p>
            <p>工作是 {work}times</p>
        </div>
    )
}

export default Example2;