
/*

自定义hook 函数 

useCallback 用来缓存我们方法
useMemo

*/

import React, { useEffect, useCallback, useState } from 'react'

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    //    缓存起来的函数
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            console.log('离开了')
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return size
}

function Example(){
    const size = useWinSize()

    return (
        <div>
            页面Size {size.width}x{size.height}
        </div>
    )
}
export default Example