
/*

useRef 获取真实的Dom元素

*/ 

import React, { useEffect, useRef, useState } from 'react'

function Example() {
    const inputEl = useRef(null);
    const btnHandle = () => {
        inputEl.current.value = "Hello .js"
        console.log('inputEl===>', inputEl.current.value)
    }
    const [text, setText] = useState('xxiao')

    const textRef = useRef()

    useEffect(()=>{
        textRef.current = text
        console.log('text,',textRef.current)
    })
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={btnHandle}>ipt展示文字</button>
            <br />
            <input value={text} onChange={(e) => { setText(e.target.value) }} />
        </div>
    )
}

export default Example;