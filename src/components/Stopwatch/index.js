// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeLeft: 0}

  onStartClicked = () => {
    this.timerUniqueId = setInterval(() => {
      this.setState(prevState => ({
        timeLeft: prevState.timeLeft + 1,
      }))
    }, 1000)
  }

  onStopClicked = () => {
    clearInterval(this.timerUniqueId)
  }

  onResetClicked = () => {
    const {timeLeft} = this.state
    this.setState({
      timeLeft: 0,
    })
    clearInterval(this.timerUniqueId)
  }

  render() {
    const {timeLeft} = this.state
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    console.log(minutes)

    return (
      <div className="main-bg">
        <h1>Stopwatch</h1>

        <div className="clock-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            className="clockicon"
            alt="stopwatch"
          />
          <p>Timer</p>
        </div>

        <h1>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </h1>
        <div className="button-container">
          <button className="button startbtn" onClick={this.onStartClicked}>
            Start
          </button>
          <button className="button stopbtn" onClick={this.onStopClicked}>
            Stop
          </button>
          <button className="button resetbtn" onClick={this.onResetClicked}>
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
