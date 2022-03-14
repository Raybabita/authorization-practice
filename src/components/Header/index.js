import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div>
    <ul className="list-item">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
