import React,{Component} from 'react';
import Footer from './Footer';


class FindDriver extends Component{
	
	state = {

			drivers : []
		};

	handleSubmit = (e) =>{
		e.preventDefault();
		var lng = this.refs.lng.value;
		var lat = this.refs.lat.value;

		document.getElementById('lng').value = '';                        //to empty the input fields after submit action
      	document.getElementById('lat').value = '';
	
		fetch('http://localhost:4000/api/drivers?lng=' + lng + '&lat=' + lat, { mode: 'no-cors'}).then(response=>{
			return response.json();
            }).then( data => {
            	this.setState({
                    drivers: data
				});
		})

	};
		
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
						<form onSubmit={this.handleSubmit}>
							<input autoComplete="off" type="text" ref="lng" id="lng" placeholder="Type your longitude" required></input>
							<input autoComplete="off" type="text" ref="lat" id="lat" placeholder="Type your latitude" required></input>
							<button>Find driver</button>
						</form>
						<ul>{driversList}</ul>
					</div>

				<Footer/>
				</div>
			

		);
	}
}

export default FindDriver;