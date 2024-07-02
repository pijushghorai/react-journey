import React from 'react'
import Styles from './WelcomeMessage.module.css'

function WelcomeMessage() {
  return (
    <div className={Styles.msgcontainer}>
        <p className={Styles.msg}>Enjoy your Day!</p>
    </div>
  )
}

export default WelcomeMessage;
