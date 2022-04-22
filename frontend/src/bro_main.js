import React from 'react'
import './bro_main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css'
import 'jquery';

import item1 from './images/item1.png'
import item2 from './images/item2.png'
import item3 from './images/item3.png'
import item4 from './images/item4.png'
import item5 from './images/item5.png'
import item6 from './images/item6.png'

function BroMain() {
  return (
	<>
	<div id="sec1">
	
	</div>
	<div id="sec2">
		<div style={{fontSize:"23px", paddingTop:"25px"}} id="tabs">
			<a href="/">Home</a>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="/#about">About Us</a>
		</div>
		<div >
			<h1 id="bro">Browse Our Food</h1>
		</div>
		<div>
			<a href="#" target="tag2">Home</a>
			<a style={{color:"#919191"}}>&nbsp;&nbsp;/&nbsp;&nbsp;</a>
			<a href="#" target="tag2">Restaurant Listing</a>
		</div>
	</div>
	<div id="sec3">
		<i className="fa fa-shopping-bag" style={{fontSize:"30px", padding:"25px", color:"white"}}></i>
		<i className="fa fa-user" style={{fontSize:"30px", padding:"25px", color:"white"}}></i>
	</div>
	<div id="sec4">
		
		<div>
			<input type="range" id="filter" className="form-range" min="0" max="2000" />
			<div className="dropdown" id="dd1">
			  <button className="btn btn-secondary dropdown-toggle" type="button" id="ddb1" data-bs-toggle="dropdown" aria-expanded="false">
			  <i className="fa fa-cutlery"></i>&nbsp;&nbsp;&nbsp; Restautant Type
			  </button>
			  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li><a className="dropdown-item" href="#">Mega Restaurant</a></li>
				<li><a className="dropdown-item" href="#">The Fast Food</a></li>
				<li><a className="dropdown-item" href="#">Green Bakery</a></li>
			  </ul>
			</div>
			<div className="dropdown" id="dd2">
			  <button className="btn btn-secondary dropdown-toggle" type="button" id="ddb2" data-bs-toggle="dropdown" aria-expanded="false">
			   <i className="fa fa-map-marker"></i>&nbsp;&nbsp;&nbsp; Restautant Location
			  </button>
			  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
				<li><a className="dropdown-item" href="#">Chennai</a></li>
				<li><a className="dropdown-item" href="#">Madurai</a></li>
				<li><a className="dropdown-item" href="#">ABC</a></li>
			  </ul>
			</div>
			<button type="button" id="fil" className="btn btn-danger"><b>FILTER</b></button>
		</div>
		
		<div id="foods">
			<div className="card" style={{width: "22rem", position:"absolute", top:"65em", left:"11%"}}>
				<img src={item1} className="card-img-top" alt="..." />
				<div className="card-body">
				<p className="card-text"><b>Food Item</b></p>
				<p className="card-text">description</p>
				</div>
			</div>
			
			<div className="card" style={{width: "22rem", position:"absolute", top:"65em", left:"38%"}}>
				<img src={item2} className="card-img-top" alt="..." />
				<div className="card-body">
				<p className="card-text"><b>Food Item</b></p>
				<p className="card-text">description</p>
				</div>
			</div>
			
			<div className="card" style={{width: "22rem", position:"absolute", top:"65em", left:"65%"}}>
				<img src={item3} className="card-img-top" alt="..." />
				<div className="card-body">
				<p className="card-text"><b>Food Item</b></p>
				<p className="card-text">description</p>
				</div>
			</div>
			<div className="card" style={{width: "22rem", position:"absolute", top:"95em" , left:"11%"}}>
				<img src={item4} className="card-img-top" alt="..." />
				<div className="card-body">
				<p className="card-text"><b>Food Item</b></p>
				<p className="card-text">description</p>
				</div>
			</div>
			
			<div className="card" style={{width: "22rem", position:"absolute", top:"95em", left:"38%"}}>
				<img src={item5} className="card-img-top" alt="..." />
				<div className="card-body">
				<p className="card-text"><b>Food Item</b></p>
				<p className="card-text">description</p>
				</div>
			</div>
			
			<div className="card" style={{width: "22rem", position:"absolute", top:"95em", left:"65%"}}>
				<img src={item6} className="card-img-top" alt="..." />
				<div className="card-body">
				<p className="card-text"><b>Food Item</b></p>
				<p className="card-text">description</p>
				</div>
			</div>
		</div>
		
		<button type="button" id="fil1" className="btn btn-danger"><b>Load More Food Options</b></button>

	</div>
	</>
  )
}

export default BroMain
