import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {id, imageUrl, name, cuisine, userRating} = productData
  const userRat = {
    totalReviews: userRating.total_reviews,
  }
  const {rating} = userRating

  return (
    <Link to={`/restaurant/${id}`} className="link-style">
      <li className="product-item" testid="restaurant-item">
        <img src={imageUrl} alt="restaurant" className="thumbnail" />
        <div>
          <h1 className="nameSize">{name}</h1>
          <p className="nameSize">{cuisine}</p>
          <div className="starCard">
            <BsFillStarFill className="color" />
            <p className="nameSize">{rating}</p>
            <p className="nameSize">({userRat.totalReviews} rating)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default ProductCard
