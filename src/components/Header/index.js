import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
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
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>

        <Link to="/cart" className="nav-link2">
          <li>Cart</li>
        </Link>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </ul>
    </div>
  )
}
export default withRouter(Header)
