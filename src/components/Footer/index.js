import {FaPinterestSquare} from 'react-icons/fa'
import {
  AiFillInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai'

import './index.css'

const Footer = () => (
  <div className="bg-cont">
    <div className="tastyheading">
      <img
        src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1626000302/Group_7420_t49no7.png"
        alt="logo"
        className="col"
      />
      <h1>Tasty Kitchens</h1>
    </div>
    <p>The only thing we are serious about is food.</p>
    <div className="icon-cont">
      <FaPinterestSquare />
      <AiFillInstagram />
      <AiOutlineTwitter />
      <AiOutlineFacebook />
    </div>
  </div>
)

export default Footer
