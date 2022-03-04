import './main.css'
import logo from './images/logo.png'
import hamburger from './images/hamburger.png'
import pizza from './images/pizza.png'
import leaves from './images/leaves.png'
import food from './images/food.png'

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
      <article className="hero">
        <img src={hamburger} alt="" className="hamburger" />
        <img src={pizza} alt="" className="pizza" />
        <img src={leaves} alt="" className="leaves" />
        <img src={food} alt="" className="food" />
        <p className="subtitle1">Lorem ipsum dolor sit amet purus.</p>
        <h1 className="title">Delicious food at your door step</h1>
        <p className="subtitle2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minus velit nisi soluta, necessitatibus deleniti? Officia est voluptas rem placeat ipsa, modi molestias consequuntur distinctio blanditiis. Incidunt rerum inventore eaque?</p>
      </article>
    </section>
    </>
  )
}

export default Main
