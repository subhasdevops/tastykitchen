import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1625912176/Layer_1_yfwxh7.png"
        alt="not found"
        className="not-found-img"
      />
      <h1>PAGE NOT FOUND</h1>
      <p className="payment-success-order">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button type="button" className="button-style">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
