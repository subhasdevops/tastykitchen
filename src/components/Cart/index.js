import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

import Footer from '../Footer'

const Cart = () => {
  const getCountValue = localStorage.getItem('count')

  function noItemCart() {
    return (
      <>
        <Header />

        <div className="not-found-container">
          <img
            src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1625912185/OBJECTS_ayaptc.jpg"
            alt="not-found"
            className="not-found-img"
          />
          <h1>No Orders Yet!</h1>
          <p>Your cart is empty. Add something from the menu.</p>
          <Link to="/">
            <button type="button" className="button-style">
              Order Now
            </button>
          </Link>
        </div>
        <Footer />
      </>
    )
  }

  function renderCart() {
    const getFoodItem = localStorage.getItem('foodItem')

    const parsedFoodItem = JSON.parse(getFoodItem)
    const price = getCountValue * parsedFoodItem.cost

    return (
      <>
        <Header />
        <div className="backGround-container">
          <div className="menu-card">
            <h1>Item</h1>
            <h1 className="heading_el">Quantity</h1>
            <h1>price</h1>
          </div>
          <div className="Food_card-menu">
            <div className="Food_card">
              <img
                className="img-card"
                src={parsedFoodItem.imageUrl}
                alt={parsedFoodItem.name}
              />
              <p>{parsedFoodItem.name}</p>
            </div>
            <p className="heading_el1">{getCountValue}</p>
            <p>{price}</p>
          </div>
          <hr className="rule" />
          <div className="total-card">
            <p className="heading_el">Order total:</p>
            <p>{price}</p>
          </div>
          <div className="confirm-card">
            <Link to="/cart/payment-success">
              <button type="button" className="confirm-order">
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return <>{getCountValue > 0 ? renderCart() : noItemCart()}</>
}
export default Cart
