import React,{Component} from 'react';
import axios from 'axios';

var lat;
var lng;
class FindDriver extends Component{
	
	constructor(props) {                                                 //not neccecary to use here
		super(props);
		this.findDriver = this.findDriver.bind(this);
		this.state = {
			drivers:[]
		}
  	}
	  
	  componentDidMount() {
		  navigator.geolocation.getCurrentPosition(function(position) {
			lat =  position.coords.latitude;
			lng = position.coords.longitude;
			console.log(lat, lng)
			
		  });     
	  }
  
	  findDriver=(e)=>{
		  e.preventDefault()
		  axios.get('http://localhost:4000/api/drivers?lat=' + lat + '&lng=' + lng).then(response=>{
				  this.setState({
					  drivers: response.data
				  });
			  		console.log(this.state.drivers);
		 	})
	  	}
		
	render(){

		var drivers = this.state.drivers;
        const driversList = drivers.map(function(driver, index){
            return(
				<li key={index}>
					<div className="row detcted-driver">
						<span className= {driver.available.toString()}></span>
						<span className="name col-3">{driver.name}</span>
						<span className="rank col-3">{driver.rank}</span> 
					</div>
                </li>
			);
		});
		

		return(
				<div className="drivers container">
			
					<h1>Find a private driver</h1>
					<div className="homepage container">
						<form onSubmit={this.findDriver}>
							
							<button>Find driver</button>
						</form>
						<ul>{driversList}</ul>
					</div>
				</div>
			

		);
	}
}

export default FindDriver;