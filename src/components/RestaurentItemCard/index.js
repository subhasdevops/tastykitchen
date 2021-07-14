import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import Counter from '../Counter'
import './index.css'

class RestaurentItem extends Component {
  state = {click: true}

  onGenerate = () => {
    this.setState({click: false})
  }

  render() {
    const {click} = this.state
    const {foodItem} = this.props
    const updatedFoodItem = {
      cost: foodItem.cost,
      foodType: foodItem.food_type,
      id: foodItem.id,
      imageUrl: foodItem.image_url,
      name: foodItem.name,
      rating: foodItem.rating,
    }
    localStorage.setItem('foodItem', JSON.stringify(updatedFoodItem))

    return (
      <li className="dish-container">
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
          {click ? (
            <button
              onClick={this.onGenerate}
              className="button-el"
              type="button"
            >
              Add
            </button>
          ) : (
            <Counter />
          )}
        </div>
      </li>
    )
  }
}

export default RestaurentItem
