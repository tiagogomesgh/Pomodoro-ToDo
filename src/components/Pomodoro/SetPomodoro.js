import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
//
    // SET POMODORO => handles events,
    //                  sets default States();
//                      



const SetPomodoro = () => {

    // sets default pomodoro timers, 50 minute work, 10 minute long break, and 5 minute short break.
    const [newTimer, setNewTimer] = useState({
        work: 50,
        short: 5,
        long: 10,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    // handles event when user changes the timer lenghths.
    const handleChange = input => {
        const {name, value} = input.target
        //ingores Missing default case;
        // eslint-disable-next-line
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                    //parses value of change to int
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
        //submitts changed timer settings
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                <button type='submit'>Set Timer</button>
            </form>
        </div>
    )
}

export default SetPomodoro