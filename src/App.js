import React, { useEffect, useContext } from 'react'
import Button from './components/Pomodoro/Button'
import CountdownAnimation from './components/Pomodoro/CountdownAnimation'
import SetPomodoro from './components/Pomodoro/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'




const App = () => {

  
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)
    //^importing methods from rest of app.
    // eslint-disable-next-line
    useEffect(() => {updateExecute(executing)}, [executing, startAnimate])
    // handles changing the timer lengths within the app

  return (
    <div className="container">
      <h1>Pomodoro</h1>
      
      {pomodoro !== 0 ?  
      // pomodoro form if statement
      <>
        <ul className="labels">
          <li>
            <Button // WORK BUTTON
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button // SHORT BUTTON
              title="Short" 
              activeClass={executing.active === 'short' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('short')} 
            />
          </li>
          <li>
            <Button // LONG BUTTON
              title="Long" 
              activeClass={executing.active === 'long' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('long')} 
            />
          </li>
        </ul>
        
        <Button title="Settings" _callback={SettingsBtn} />
          {/* SETTINGS BUTTON */}
        <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                //FEEDS ANIMATION
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          {/* START AND PAUSE BUTTONS */}
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}

export default App;


