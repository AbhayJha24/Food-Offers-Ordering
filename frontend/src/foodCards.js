import React from 'react'
import {useEffect, useState} from 'react'
import jsCookie from 'js-cookie'
import item1 from "./images/item1.png";

const FoodCards = () => {

    const [food, setFood] = useState(null)

    useEffect(async () => {
        navigator.geolocation.getCurrentPosition(async pos=>{
            let resp = await fetch(`https://developers.zomato.com/api/v2.1/cuisines?apikey=5ffb698e3d9a8ea8d51fb8847c216058&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`)
            let foodDetails = await resp.json()
            setFood(foodDetails["cuisines"])
        })
    }, [])

    const addToCart = name => {
          if (jsCookie.get(name)) {
            jsCookie.set(name, parseInt(jsCookie.get(name))+1);
          }
          else{
            jsCookie.set(name, "1");
          }
    }

    if (food) {
        return(
        food.map(fd => {
            // console.log(fd["cuisine"]["cuisine_name"]);
            return(
              <article className="foodCard" onClick={() => addToCart(fd["cuisine"]["cuisine_name"])}>
              <img src={item1} alt="" className="foodCardImage" />
              <div className="itemDetailsArea">
                <div className="cardNameRating">
                <h4 className="itemCardName">{fd["cuisine"]["cuisine_name"]}</h4>
                <ul className="itemCardRating">
                  <li className="star"><i className="las la-star"></i></li>
                  <li className="star"><i className="las la-star"></i></li>
                  <li className="star"><i className="las la-star"></i></li>
                  <li className="star"><i className="las la-star"></i></li>
                  <li className="star"><i className="las la-star"></i></li>
                </ul>
                </div>
                <p className="itemCardDescription">Curabitur mollis bibendum luctus..</p>
              </div>
            </article>
            )
        })
        )
    }

    else{
        return(
            <h1>Please Wait !</h1>
        )
    }
      
}

export default FoodCards