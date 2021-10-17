import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [timer, setTimer] = useState();

    const handleCoutStart = () => {
        setToggle(false);
        setTimer(
            setInterval(() => {
                setCount((prevState) => prevState + 1);
            }, 1000)
        );
    };

    const handleCoutPause = () => {
        clearInterval(timer);
        console.log(65657658, timer);
    };
    const handleReset = () => {
        setToggle(true);
        setCount(0);
    };
    return (
        <div className="App">
            <p>You clicked {count} times</p>
            {toggle ? (
                <button onClick={handleCoutStart}>start</button>
            ) : (
                <button onClick={handleCoutPause}>pause</button>
            )}
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}