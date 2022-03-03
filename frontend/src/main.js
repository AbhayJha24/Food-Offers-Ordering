import './main.css'
import logo from './images/logo.png'

function Main() {
  return (
    <>
    <section className="section1">
      <nav className="nav-bar">
        <li className="nav-logo"><img src={logo} alt="Logo" className="logo" /></li>
        <li className="nav-buttons">Browse Food</li>
        <li className="nav-buttons">About Us</li>
        <ul className="user-links">
          <li className="cart">
          <i class="las la-shopping-bag"></i>
          </li>
          <li className="user">
          <i class="las la-user"></i>
          </li>
          <li className="drop-down">
          <i class="las la-angle-down"></i>
          </li>
        </ul>
      </nav>
    </section>
    </>
  )
}

export default Main
