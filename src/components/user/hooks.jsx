import React, { useState } from 'react'

const Hooks = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>El valor del contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Aumentar</button>
        </div>
    )
}

export default Hooks;