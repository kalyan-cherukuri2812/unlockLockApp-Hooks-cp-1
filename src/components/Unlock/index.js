// Write your code here
import './index.css'
import {useState} from 'react'

const Unlock = () => {
  const [lockStatus, setlockStatus] = useState(true)

  const btnClick = () => {
    setlockStatus(prev => !prev)
  }
  console.log(lockStatus)
  return (
    <div className="main-div">
      <img
        src={
          lockStatus
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={lockStatus ? 'lock' : 'unlock'}
      />
      <p>{lockStatus ? 'Your Device is Locked' : 'Your Device is Unlocked'}</p>
      <button onClick={btnClick} type="button">
        {lockStatus ? 'Unlock' : 'Lock'}
      </button>
    </div>
  )
}

export default Unlock
