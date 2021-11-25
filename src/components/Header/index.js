import {Link, withRouter} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Header extends Component {
  state = {mobileFlag: false}

  onclickMobileMenu = () => {
    this.setState(prev => ({mobileFlag: !prev.mobileFlag}))
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {mobileFlag} = this.state

    const {tabC, tabH} = this.props

    return (
      <>
        <div className="nav-header">
          <div className="nav-content">
            <Link to="/">
              <img
                className="website-logo"
                src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1625912174/Group_7420_q3pjjp.jpg"
                alt="website logo"
              />
            </Link>
            <Link to="/" className="font-col">
              <h1>Tasty Kitchens</h1>
            </Link>
          </div>

          <img
            src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1637389377/Icon_hppscm.jpg"
            alt="mobile-icon"
            onClick={this.onclickMobileMenu}
            className="mobile-layout-img"
          />

          <ul className="nav-menu">
            <Link to="/" className="nav-link">
              <li className={tabH}>Home</li>
            </Link>

            <Link to="/cart" className="nav-link">
              <li className={tabC}>Cart</li>
            </Link>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </ul>
        </div>
        {mobileFlag && (
          <ul className="nav-menu-mobile">
            <Link to="/" className="nav-link">
              <li className={tabH}>Home</li>
            </Link>

            <Link to="/cart" className="nav-link">
              <li className={tabC}>Cart</li>
            </Link>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </ul>
        )}
      </>
    )
  }
}
export default withRouter(Header)
