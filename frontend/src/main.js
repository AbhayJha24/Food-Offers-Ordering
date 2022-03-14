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
        <form className="search-holder">
          <span className="location"><i class="las la-map-marker"></i></span>
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
          <span className="foodIcon"><i class="las la-brush"></i></span>
          <h1 className="section2Nos">1052+</h1>
          <p className="section2Text">Online Orders</p>
        </div>
        <div>
        <span className="foodIcon"><i class="las la-pizza-slice"></i></span>
          <h1 className="section2Nos">9800+</h1>
          <p className="section2Text">Satisfied Customers </p>
          </div>
        <div>
        <span className="foodIcon"><i class="las la-mug-hot"></i></span>
          <h1 className="section2Nos">3785+</h1>
          <p className="section2Text">Cup of Teas</p>
          </div>
      </article>
    </section>
    <section className="section3">
      <article className="foodCard">
        <img src={item1} alt="" className="foodCardImage" />
        <div className="itemDetailsArea">
          <div className="cardNameRating">
          <h4 className="itemCardName">Mega Restaurant</h4>
          <ul className="itemCardRating">
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
          </ul>
          </div>
          <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
        </div>
      </article>
      <article className="foodCard">
        <img src={item2} alt="" className="foodCardImage" />
        <div className="itemDetailsArea">
          <div className="cardNameRating">
          <h4 className="itemCardName">The Fast Food</h4>
          <ul className="itemCardRating">
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
          </ul>
          </div>
          <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
        </div>
      </article>
      <article className="foodCard">
        <img src={item3} alt="" className="foodCardImage" />
        <div className="itemDetailsArea">
          <div className="cardNameRating">
          <h4 className="itemCardName">Green Bakery</h4>
          <ul className="itemCardRating">
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
          </ul>
          </div>
          <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
        </div>
      </article>
      <article className="foodCard">
        <img src={item4} alt="" className="foodCardImage" />
        <div className="itemDetailsArea">
          <div className="cardNameRating">
          <h4 className="itemCardName">Eat Frio</h4>
          <ul className="itemCardRating">
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
          </ul>
          </div>
          <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
        </div>
      </article>
      <article className="foodCard">
        <img src={item5} alt="" className="foodCardImage" />
        <div className="itemDetailsArea">
          <div className="cardNameRating">
          <h4 className="itemCardName">Turkish Cousine</h4>
          <ul className="itemCardRating">
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
          </ul>
          </div>
          <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
        </div>
      </article>
      <article className="foodCard">
        <img src={item6} alt="" className="foodCardImage" />
        <div className="itemDetailsArea">
          <div className="cardNameRating">
          <h4 className="itemCardName">Pizzario</h4>
          <ul className="itemCardRating">
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
            <li className="star"><i class="las la-star"></i></li>
          </ul>
          </div>
          <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
        </div>
      </article>
    </section>
    </>
  )
}

export default Main
