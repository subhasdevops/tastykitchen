import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const PaymentSuccess = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1626254426/Vector_qzt0ut.png"
        alt="not-found"
        className="not-found-img"
      />
      <h1>Payment Successful</h1>
      <p>Thank you for ordering Your payment is successfully completed.</p>
      <Link to="/">
        <button type="button" className="button-color">
          Go To Home Page
        </button>
      </Link>
    </div>
  </>
)

export default PaymentSuccess
