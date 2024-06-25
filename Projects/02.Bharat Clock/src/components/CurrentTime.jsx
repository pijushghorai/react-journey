import React from 'react'

function CurrentTime() {
    let time = new Date();
    let cTime = time.toLocaleTimeString();

  return (
    <div>
        This is the current Time {cTime}
    </div>
  )
}


export default CurrentTime;