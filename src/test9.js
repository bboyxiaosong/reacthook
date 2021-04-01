
import React, { useRef, useState } from 'react'

function Example() {
    const inputEl = useRef(null);
    const btnHandle = () => {
        inputEl.current.value = "Hello .js"
        console.log('inputEl===>', inputEl)
    }
    const [text, setText] = useState('xxiao')
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