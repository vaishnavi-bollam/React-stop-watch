// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {initialValue: '00:00', secvalue: 1, minvalue: 0}

  onStartClicked = () => {
    const {secvalue, initialValue, minvalue} = this.state
    if (secvalue < 10) {
      this.setState(prevState => ({
        secvalue: prevState.secvalue + 1,
        initialValue: `0${minvalue}:0${secvalue}`,
      }))
    } else if (secvalue >= 10 && secvalue < 60) {
      this.setState(prevState => ({
        secvalue: prevState.secvalue + 1,
        initialValue: `0${minvalue}:${secvalue}`,
      }))
    }

    if (secvalue === 59 && minvalue < 10) {
      this.setState(prevState => ({
        minvalue: prevState.minvalue + 1,
        initialValue: `0${minvalue}:00`,
        secvalue: 1,
      }))
    } else if (minvalue >= 10) {
      this.setState(prevState => ({
        minvalue: prevState.minvalue + 1,
        initialValue: `${minvalue}:00`,
        secvalue: 1,
      }))
    }
  }

  render() {
    const {secvalue, initialValue} = this.state
    return (
      <div className="main-bg">
        <h1>StopWatch</h1>

        <div className="clock-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            className="clockicon"
            alt="stop watch"
          />
          <p>Timer</p>
        </div>

        <h1>{initialValue}</h1>
        <div className="button-container">
          <button className="button" onClick={this.onStartClicked}>
            Start
          </button>
          <button className="button">Stop</button>
          <button className="button">Reset</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
