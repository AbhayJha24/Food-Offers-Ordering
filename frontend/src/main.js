import './main.css'
import logo from './images/logo.png'
import hamburger from './images/hamburger.png'
import pizza from './images/pizza.png'
import leaves from './images/leaves.png'
import food from './images/food.png'
import item1 from './images/item1.png'
import item2 from './images/item2.png'
import item3 from './images/item3.png'
import item4 from './images/item4.png'
import item5 from './images/item5.png'
import item6 from './images/item6.png'
import {useState} from 'react'
import jsCookie from 'js-cookie'
import Minicart from './minicart'
import FoodCards from './foodCards'

function Main() {

  const [minicart, setMinicart] = useState(false);

  const showMiniCart = () => {
    if (!minicart) {
      setMinicart(true);
    }
  }

  const removeMiniCart = () => {
    if (minicart) {
      setMinicart(false);
    }
  }

  return (
    <>
    <section className="section1">
      <nav className="nav-bar">
        <li className="nav-logo"><img src={logo} alt="Logo" className="logo" /></li>
        <a href="/browse"><li className="nav-buttons">Browse Food</li></a>
        <a href="#about"><li className="nav-buttons">About Us</li></a>
        <ul className="user-links">
          <li className="cart" onMouseOver={showMiniCart} onMouseLeave={removeMiniCart}>
          <i className="las la-shopping-bag"></i>
          </li>
          <li className="user">
          <i className="las la-user"></i>
          </li>
          <li className="drop-down">
          <i className="las la-angle-down"></i>
          </li>
        </ul>
        <div className={`minicart-link-${minicart}`} onMouseOver={showMiniCart} onMouseLeave={removeMiniCart}>
          <div className="minicart-content">
            <Minicart />
        </div>
      <ul className="ml-0">
              <li>
                  <div className="total-price">
                      {/* <span className="f-left">Total:</span> */}
                      <span className="f-right">₹239.9</span>
                  </div>
              </li>
              <li>
                  <div className="checkout-link">
                      <a href="#" className="checkout-btn" id="checkout-btn">Checkout</a>
                  </div>
              </li>
          </ul>
        </div>
      </nav>
      <article className="hero">
        <img src={hamburger} alt="" className="hamburger" />
        <img src={pizza} alt="" className="pizza" />
        <img src={leaves} alt="" className="leaves" />
        <img src={food} alt="" className="food" />
        <p className="subtitle1">Lorem ipsum dolor sit amet purus.</p>
        <h1 className="title">Delicious food at your door step</h1>
        <p className="subtitle2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam minus velit nisi soluta, necessitatibus deleniti? Officia est voluptas rem placeat ipsa, modi molestias consequuntur distinctio blanditiis. Incidunt rerum inventore eaque?</p>
        <form className="search-holder">
          <span className="location"><i className="las la-map-marker"></i></span>
          <input type="text" className="search" placeholder="Your Address" id="" />
          <button className="searchButton">Check for Food Delivery</button>
        </form>
      </article>
    </section>
    <section className="section2">
      <article className="foodDescription">
        <p className="subtitle3">Basic info about online food.</p>
        <h1 className="title2">delicious food is our aim.</h1>
      </article>
      <article className="foodIcons">
        <div>
          <span className="foodIcon"><i className="las la-brush"></i></span>
          <h1 className="section2Nos">1052+</h1>
          <p className="section2Text">Online Orders</p>
        </div>
        <div>
        <span className="foodIcon"><i className="las la-pizza-slice"></i></span>
          <h1 className="section2Nos">9800+</h1>
          <p className="section2Text">Satisfied Customers </p>
          </div>
        <div>
        <span className="foodIcon"><i className="las la-mug-hot"></i></span>
          <h1 className="section2Nos">3785+</h1>
          <p className="section2Text">Cup of Teas</p>
          </div>
      </article>
    </section>
    <section className="section3">
      <FoodCards />
    </section>
    <section className="section4">
      <button className="more-food">Browse More Food Options</button>
    </section>
    <a name="about"></a>
    <section className="section6">
    <article className="foodDescription">
        <p className="subtitle3">Basic info about food delivery.</p>
        <h1 className="title2">we are behind the delicious food delivery.</h1>
      </article>
      <article className="about-desc">
        <p className="about-para">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus.</p>
        <p className="about-para">Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus.</p>
      </article>
    </section>
    <section className="section5">
      <article className="about-card">
      <span className="about-icon"><i className="las la-lightbulb"></i></span>
      <p className="about-card-text">We have new ideas for your food business.</p>
      </article>
      <article className="about-card">
      <span className="about-icon-active"><i className="las la-bicycle"></i></span>
      <p className="about-card-text">Join our amazing delivery staff.</p>
      </article>
      <article className="about-card">
      <span className="about-icon"><i className="lar la-heart"></i></span>
      <p className="about-card-text">We love our valued food customers.</p>
      </article>
    </section>
    </>
  )
}

export default Main
