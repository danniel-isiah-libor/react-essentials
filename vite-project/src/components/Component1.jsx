import Component2 from './Component2'
import {useState, useEffect, useRef} from 'react'

export default function Component1() {
    const [count, setCount] = useState(0)
    const renderCount = useRef(0)

    useEffect(function () {
        // renderCount.current++
        
        renderCount.current = renderCount.current + 1
        
        console.log(renderCount.current);
    })
  
    function onChange(event) {
        // setCount(event.target.value)
        renderCount.current = event.target.value
    }

    return (
    <>
        <Component2/>

        <input type="number" onChange={onChange}/>
    </>
  )
}
