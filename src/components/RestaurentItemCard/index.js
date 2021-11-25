import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

import './index.css'

class RestaurentItem extends Component {
  state = {quantity: 1}

  onGenerate = () => {
    const {prdData, foodItem} = this.props
    const {quantity} = this.state
    const updatedFoodItem = {
      cost: foodItem.cost,
      foodType: foodItem.food_type,
      id: foodItem.id,
      imageUrl: foodItem.image_url,
      name: foodItem.name,
      rating: foodItem.rating,
    }
    prdData({...updatedFoodItem, quantity})
  }

  onIncrement = () => {
    this.setState(prev => ({quantity: prev.quantity + 1}))
  }

  onDecrement = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prev => ({quantity: prev.quantity - 1}))
    }
  }

  render() {
    const {foodItem} = this.props
    const updatedFoodItem = {
      cost: foodItem.cost,
      foodType: foodItem.food_type,
      id: foodItem.id,
      imageUrl: foodItem.image_url,
      name: foodItem.name,
      rating: foodItem.rating,
    }
    const {quantity} = this.state

    return (
      <li className="dish-container" testid="foodItem">
        <div>
          <img
            className="dish-img"
            src={updatedFoodItem.imageUrl}
            alt={updatedFoodItem.name}
          />
        </div>
        <div className="food-rating">
          <h1 className="foodName-card">{updatedFoodItem.name}</h1>
          <div className="cost-card">
            <BiRupee />
            <p>{updatedFoodItem.cost}</p>
          </div>
          <div className="cost-card">
            <AiFillStar className="color" />
            <p>{updatedFoodItem.rating}</p>
          </div>

          <div className="counter-card">
            <button
              type="button"
              onClick={this.onDecrement}
              testid="decrement-count"
              className="count-inc"
            >
              -
            </button>
            <div className="count-item" testid="active-count">
              {quantity}
            </div>
            <button
              type="button"
              onClick={this.onIncrement}
              testid="increment-count"
              className="count-inc"
            >
              +
            </button>
          </div>
          <button onClick={this.onGenerate} className="button-el" type="button">
            Add
          </button>
        </div>
      </li>
    )
  }
}

export default RestaurentItem
