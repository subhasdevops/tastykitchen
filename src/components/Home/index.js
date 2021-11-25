import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactSlider from '../reactslick'
import Header from '../Header'
import './index.css'
import Products from '../Products'
import Footer from '../Footer'

const getStoredData = JSON.parse(localStorage.getItem('cartData'))

if (getStoredData === null) {
  localStorage.setItem('cartData', JSON.stringify([]))
}

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header tabH="tabCol" />

        <ReactSlider />

        <Products />
        <Footer />
      </>
    )
  }
}

export default Home
