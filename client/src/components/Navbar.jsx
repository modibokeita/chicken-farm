import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.jpg"
import { MdMenu } from "react-icons/md";
import { useState } from "react";
function Navbar() {
const [show, setShow] = useState(false);

  function handleClick(){
      setShow(prev => !prev);
  }
  return (
    <header>
        <div className="logo">
        <img src={Logo} alt=""  width="100px"/>
        <Link to="/" className="farm">Chicken Farm</Link>
        <button
        className="menu"
        onClick={handleClick}
        >
          <MdMenu/>
          </button>
        </div>
        {show && <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>}
    </header>
  )
}

export default Navbar

