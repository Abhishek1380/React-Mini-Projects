import React, { useState } from 'react';
import './Counter.css'
function Counter() {

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(prev => prev + 1);
    }

    function decrementCount() {
        setCount(prev => prev - 1);
    }

    function resetCount() {
        setCount(prev => 0);
    }

    return (
        <>
            <div class="counter-container">
                <h1>⚡ Crazy Counter App ⚡</h1>
                <p id="count">{count}</p>
                <div class="buttons">
                    <button id="increment" onClick={incrementCount}>➕ Increment</button>
                    <button id="decrement" onClick={decrementCount}>➖ Decrement</button>
                    <button id="reset" onClick={resetCount}>🔄 Reset</button>
                </div>
            </div>
        </>
    )
}

export default Counter;