import {
  FaPinterestSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="bg-cont">
    <div className="tastyHeading">
      <img
        src="https://res.cloudinary.com/dzfehrv3n/image/upload/v1626000302/Group_7420_t49no7.png"
        alt="website-footer-logo"
        className="col"
      />
      <h1>Tasty Kitchens</h1>
    </div>
    <div className="Footer-Contact">
      <p>The only thing we are serious about is food. Contact us on</p>
    </div>

    <div className="icon-cont">
      <a
        className="icons-style"
        href="http://pinterest.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaPinterestSquare color="white" testid="pintrest-social-icon" />
      </a>
      <a
        className="icons-style"
        href="http://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram color="white" testid="instagram-social-icon" />
      </a>
      <a
        className="icons-style"
        href="http://twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter color="white" testid="twitter-social-icon" />
      </a>
      <a
        className="icons-style"
        href="http://fb.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare color="white" testid="facebook-social-icon" />
      </a>
    </div>
  </div>
)

export default Footer
