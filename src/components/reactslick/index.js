import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

export default class ReactSlider extends Component {
  render() {
    const settings = {
      dots: true,
    }
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              className="pic"
              alt="kit1"
              src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg"
            />
          </div>
          <div>
            <img
              className="pic"
              alt="kit2"
              src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-rajasthani-special.jpg"
            />
          </div>
          <div>
            <img
              className="pic"
              alt="kit3"
              src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-uttar-pradesh-special.jpg"
            />
          </div>
          <div>
            <img
              className="pic"
              alt="kit4"
              src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-north-indian-special.jpg"
            />
          </div>
        </Slider>
      </div>
    )
  }
}
