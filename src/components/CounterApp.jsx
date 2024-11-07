import React, { useState } from 'react';
const CounterApp = () => {
    const [count, setCount] = useState(0);
    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);
    const handleReset = () => setCount(0);
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrease} style={{ margin: '10px' }}>Add</button>
            <button onClick={handleDecrease} style={{ margin: '10px' }}>Decrease</button>
            <button onClick={handleReset} style={{ margin: '10px' }}>Reset</button>
        </div>
    );
};
export default CounterApp;