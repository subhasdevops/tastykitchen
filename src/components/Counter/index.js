import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {counter: 1}

  onIncrement = () => {
    this.setState(prev => ({counter: prev.counter + 1}))
  }

  onDecrement = () => {
    const {counter} = this.state
    if (counter > 1) {
      this.setState(prev => ({counter: prev.counter - 1}))
    }
  }

  render() {
    const {counter} = this.state
    localStorage.setItem('count', counter)

    const parsedVal = localStorage.getItem('count')

    return (
      <div className="counter-card">
        <button
          type="button"
          onClick={this.onDecrement}
          testid="decrement-count"
        >
          -
        </button>
        <div className="count-item">{parsedVal}</div>
        <button
          type="button"
          onClick={this.onIncrement}
          testid="increment-count"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
