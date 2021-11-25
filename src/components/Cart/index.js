import {Link} from 'react-router-dom'
import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import Header from '../Header'
import './index.css'

import Footer from '../Footer'

class Cart extends Component {
  state = {
    itemsData: JSON.parse(localStorage.getItem('cartData')),
  }

  onInc = id => {
    this.setState(prev => ({
      itemsData: prev.itemsData.map(each => {
        if (each.id === id) {
          return {...each, quantity: each.quantity + 1}
        }
        return each
      }),
    }))
  }

  onDesc = (id, quantity) => {
    if (quantity > 1) {
      this.setState(prev => ({
        itemsData: prev.itemsData.map(each => {
          if (each.id === id) {
            return {...each, quantity: each.quantity - 1}
          }
          return each
        }),
      }))
    }
  }

  noItemCart = () => (
    <>
      <Header tabC="tabCol" />

      <div className="not-found-container">
        <img
          src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1625912185/OBJECTS_ayaptc.jpg"
          alt="empty cart"
          className="not-found-img"
        />
        <h1>No Order Yet!</h1>
        <p className="payment-success-order">
          Your cart is empty. Add something from the menu.
        </p>
        <Link to="/">
          <button type="button" className="button-style">
            Order Now
          </button>
        </Link>
      </div>
      <Footer />
    </>
  )

  renderFoodItems = each => {
    const {id, cost, imageUrl, quantity, name} = each

    return (
      <li className="cart-item" key={id} testid="cartItem">
        <div className="img-cart-card">
          <img className="cart-product-image" src={imageUrl} alt={name} />
          <h1 className="cart-product-title">{name}</h1>
        </div>

        <div className="mobile-cart-card">
          <h1 className="mobile-cart-product-title">{name}</h1>
          <div className="cart-quantity-container">
            <button
              type="button"
              className="quantity-controller-button"
              testid="decrement-quantity"
              onClick={() => this.onDesc(id, quantity)}
            >
              <BsDashSquare color="#52606D" size={12} />
            </button>
            <h1 className="cart-quantity" testid="item-quantity">
              {quantity}
            </h1>
            <button
              type="button"
              className="quantity-controller-button"
              testid="increment-quantity"
              onClick={() => this.onInc(id, quantity)}
            >
              <BsPlusSquare color="#52606D" size={12} />
            </button>
          </div>
          <div className="total-price-delete-container">
            <p className="cart-total-price">
              <BiRupee size={15} />
              {cost * quantity}/-
            </p>
          </div>
        </div>
      </li>
    )
  }

  renderCart = () => {
    const {itemsData} = this.state

    const totalArr = itemsData.map(each => each.cost * each.quantity)

    const total = totalArr.reduce((acc, val) => acc + val, 0)

    localStorage.setItem('cartData', JSON.stringify(itemsData))

    return (
      <>
        <Header tabC="tabCol" />
        <div className="bg-cart-cont">
          <div className="cart-items-card">
            <div className="item-heading-card">
              <p className="sub-item-heading">Item</p>
              <p className="sub-item-heading">Quantity</p>
              <p className="sub-item-heading">Price</p>
            </div>
            <ul className="cart-ul">
              {itemsData.map(each => this.renderFoodItems(each))}
            </ul>
            <div className="item-heading">
              <h1 className="sub-item-heading">Order Total:</h1>
              <div>
                <div className="total-price-icon-cont">
                  <BiRupee size={15} />
                  <p className="sub-item-heading" testid="total-price">
                    {total}.00
                  </p>
                </div>

                <Link to="/cart/payment-success">
                  <button type="button" className="confirm-order">
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }

  render() {
    const {itemsData} = this.state
    console.log(itemsData.length)
    return <>{itemsData.length === 0 ? this.noItemCart() : this.renderCart()}</>
  }
}
export default Cart
