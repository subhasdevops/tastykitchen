import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ReactSlider from '../reactslick'
import Header from '../Header'
import './index.css'
import Products from '../Products'
import Footer from '../Footer'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />

        <ReactSlider />

        <Products />
        <Footer />
      </>
    )
  }
}

export default Home
