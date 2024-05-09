import { useEffect } from "react";
import { useState } from "react"
import './StopWatch.css';

export default function StopWatch(){

    const [time, setTime] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState('00');
    const [timerOn, setTimerOn] = useState(false);

    const handleStartTimer = ()=>{
        setTimerOn(true);
        console.log('timer turned on')
    }

    const handleTimerReset = ()=>{
        setTime(0);
        console.log('timer reset')
        setTimerOn(false);
    }

    useEffect(()=>{

        let timer;

        if (timerOn){
            timer = setInterval(() => {
                setTime(time+1);                
            }, 1000);

        }

        setMinutes(Math.floor(time/60));
        setSeconds(("0" +  (time%60)).slice(-2));

        return ()=>clearInterval(timer)
    }, [timerOn, time])
 
    return (
        <div className='main-page'>
            <h1>Stopwatch</h1>
            <p>Time: {" " + minutes + ":" + seconds}</p>
            <button onClick={handleStartTimer}>Start</button>
            <button onClick={handleTimerReset}>Reset</button>
        </div>
    )
}