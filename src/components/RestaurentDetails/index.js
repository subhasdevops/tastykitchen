import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import Header from '../Header'
import RestaurentItem from '../RestaurentItemCard'

class RestaurentDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    const fetchedData = {
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
      foodItems: data.food_items,
      id: data.id,
      imageUrl: data.image_url,
      itemsCount: data.items_count,
      location: data.location,
      name: data.name,
      opensAt: data.opens_at,
      rating: data.rating,
      reviewsCount: data.reviews_count,
    }
    this.setState({blogData: fetchedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {
      name,
      imageUrl,
      location,
      cuisine,
      rating,
      reviewsCount,
      costForTwo,
      foodItems,
    } = blogData
    return (
      <>
        <Header />
        <div className="card-container">
          <div>
            <img className="image-card" src={imageUrl} alt={name} />
          </div>
          <div className="card-details card-subHeading">
            <h1 className="card-heading">{name}</h1>
            <p>{cuisine}</p>
            <p>{location}</p>
            <div className="card-rating">
              <div className="rating">
                <div className="cost-card">
                  <AiFillStar />
                  <p>{rating}</p>
                </div>
                <p>{reviewsCount} + ratings</p>
              </div>
              <hr />
              <div>
                <div className="cost-card">
                  <BiRupee />
                  <p>{costForTwo}</p>
                </div>
                <p>Cost for two</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="foodItem-cont">
          {foodItems.map(each => (
            <RestaurentItem foodItem={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default RestaurentDetails
