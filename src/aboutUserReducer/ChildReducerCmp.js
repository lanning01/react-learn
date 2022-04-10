import React, { useState, useEffect } from 'react'
export default function ChildReducerCmp(props) {
    const [count, setCount] = useState("");
    function click() {
        setCount(count + 1)
    }
    useEffect(() => {
        props.handelMenu&& props.handelMenu(count)
    }, [count])
    return (
        <div>ChildReducerCmp
            props.value:{props.value};
            <h1>{count}</h1>
            <button onClick={() => { click() }}>
                click
            </button>
        </div>
    )
}
