// imports data from Context hook
import { useState, createContext } from "react";
export const SettingsContext = createContext()

        // EXECUTES , CONVERTS, AND THEN EVALUATES THE TIMER
function SettingsContextProvider(props) {

    const [pomodoro, setPomodoro] = useState(0)
    // ^ going to run entire application.
    const [executing, setExecuting] = useState({})
    // ^ object that comes from settingscontext page.
    const [startAnimate, setStartAnimate] = useState(false)
    // ^ going to start progress bar animation

    
    function setCurrentTimer (active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    
    // start animation function 
    function startTimer() {
        setStartAnimate(true)
    }
   
    // pause animation function 
    function pauseTimer() {
        setStartAnimate(false)
    }
    
    
    // pass time to counter 
    const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    
    return `${minutes}:${seconds}`
    }

    
    // clear session storage 
    const SettingsBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    
    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    
    const setTimerTime = (evaluate) => {
        switch (evaluate.active) {
            case 'work':
                setPomodoro(evaluate.work)
                break;
            case 'short':
                setPomodoro(evaluate.short)
                break;
            case 'long':
                setPomodoro(evaluate.long)
                break;
                default:
                    setPomodoro(0)
                break;
        }
    }

    
    function stopAimate() {
        setStartAnimate(false)
    }

    
    return (
        <SettingsContext.Provider value={{
            pomodoro, 
            executing,
            updateExecute, 
            startAnimate, 
            startTimer,
            pauseTimer,
            children,
            SettingsBtn,
            setCurrentTimer,
            stopAimate
        }}>
            {props.children}
        </SettingsContext.Provider>
    )

}


export default SettingsContextProvider