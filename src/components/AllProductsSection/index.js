import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineLeftSquare, AiOutlineRightSquare} from 'react-icons/ai'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'
import './index.css'

const sortByOptions = [
  {
    optionId: 'HIGH',
    displayText: 'Highest',
  },
  {
    optionId: 'LOW',
    displayText: 'Lowest',
  },
]

class AllProductsSection extends Component {
  state = {
    offset: 0,
    productsList: [],
    isLoading: false,
    activeOptionId: sortByOptions[1].optionId,
  }

  componentDidMount() {
    this.getProducts()
  }

  onIncrease = () => {
    this.setState(prev => ({offset: prev.offset + 9}), this.getProducts)
  }

  onDecrease = () => {
    const {offset} = this.state
    if (offset <= 0) {
      this.setState({offset: 0}, this.getProducts)
    } else {
      this.setState(prev => ({offset: prev.offset - 9}), this.getProducts)
    }
  }

  getProducts = async () => {
    const {offset} = this.state
    console.log(offset)
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {activeOptionId} = this.state
    const apiUrl = `https://apis.ccbp.in/restaurants-list?${offset}&limit=9&sort_by_rating=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.restaurants.map(each => ({
        costForTwo: each.cost_for_two,
        cuisine: each.cuisine,
        groupByTime: each.group_by_time,
        hasOnlineDelivery: each.has_online_delivery,
        hasTableBooking: each.has_table_booking,
        id: each.id,
        imageUrl: each.image_url,
        isDeliveringNow: each.is_delivering_now,
        location: each.location,
        menuType: each.menu_type,
        name: each.name,
        opensAt: each.opens_at,
        userRating: each.user_rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state
    return (
      <>
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <hr />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
        <div className="pagination-card">
          <button
            type="button"
            onClick={this.onDecrease}
            className="icon-button"
          >
            <AiOutlineLeftSquare size={30} />
          </button>
          <p>1 of 20</p>
          <button
            type="button"
            onClick={this.onIncrease}
            className="icon-button"
          >
            <AiOutlineRightSquare size={30} />
          </button>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderLoader() : this.renderProductsList()
  }
}

export default AllProductsSection
