import { useEffect } from "react";
import { useState } from "react"
import './StopWatch.css';

export default function StopWatch(){

    const [time, setTime] = useState(0);
    const [timeText, setTimeText] = useState('Time: 0:00');
    const [timerOn, setTimerOn] = useState(false);

    const handleStartTimer = ()=>{
        setTimerOn(!timerOn);
        if (timerOn){
            setTime(time+1);
        }
        // console.log('timer turned on: ', timerOn);
    }

    const handleTimerReset = ()=>{
        setTime(0);
        // console.log('timer reset')
        setTimerOn(false);
    }

    useEffect(()=>{

        let timer;

        if (timerOn){
            timer = setInterval(() => {
                setTime(time+1);                
            }, 1000);
        } 
        else {
            clearInterval(timer);
        }

        setTimeText(`Time: ${Math.floor(time/60)}:${("0" +  (time%60)).slice(-2)}`)
        // setMinutes(Math.floor(time/60));
        // setSeconds(("0" +  (time%60)).slice(-2));

        return ()=>clearInterval(timer)
    }, [timerOn, time])
 
    return (
        <div className='main-page'>
            <h1>Stopwatch</h1>
            <p>{timeText}</p>
            <button onClick={handleStartTimer}>{timerOn ? 'Stop' : 'Start'}</button>
            <button onClick={handleTimerReset}>Reset</button>
        </div>
    )
}