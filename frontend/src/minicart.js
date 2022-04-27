import React from 'react'
import jsCookie from 'js-cookie';
import item1 from './images/item1.png'
import item2 from './images/item2.png'
import item3 from './images/item3.png'
import item4 from './images/item4.png'
import item5 from './images/item5.png'
import item6 from './images/item6.png'

const Minicart = () => {

    const removeCookie = name => {
        jsCookie.remove(name)
    }

    const incrementQuantity = name => {
        jsCookie.set(name, parseInt(jsCookie.get(name))+1);
    }
    
    const decrementQuantity = name => {
        if (parseInt(jsCookie.get(name)) > 1) {
            jsCookie.set(name, parseInt(jsCookie.get(name))-1);   
        }
    }

    if((Object.keys(jsCookie.get()).length > 0 && !jsCookie.get("authtoken")) || (Object.keys(jsCookie.get()).length > 1 && jsCookie.get("authtoken"))){
            return(
            Object.keys(jsCookie.get()).map( i =>{
                if (i == "authtoken") {
                    return(
                        <h1></h1>
                    )
                }
                else{
                return (
                    <div className="row-minicart">
                        <div className="cart-img">
                            <a href="#">
                                <img src={item1} alt="" />
                            </a>
                        </div>
                        <div className="cart-content">
                            <h4>
                                <a href="#">{i}</a>
                            </h4>
                            <div className="cart-price">
                                <span className="new">₹229.9</span>
                                <span><del>₹529.9</del></span>
                            </div>
                            <div className="number">
                                <span className="minus" onClick={() => decrementQuantity(i)}>-</span>
                                <input type="text" value={jsCookie.get(i)} />
                                <span className="plus" onClick={() => incrementQuantity(i)}>+</span>
                            </div>
                            <div className="del-icon" onClick={() => removeCookie(i)}>
                                <a href="#">
                                    <i className="las la-trash-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        )
    }
    else{
        return(
            <h1 className="cart-empty">Cart Empty</h1>
        )
    }
}

export default Minicart