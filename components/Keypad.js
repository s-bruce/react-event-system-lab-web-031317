import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
    this.enterPassword = this.enterPassword.bind(this)
  }

  enterPassword() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.enterPassword}/>
    )
  }
}

export default Keypad
