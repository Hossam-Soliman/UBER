import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./Navbar"
import AddDriver from './AddDriver'
import FindDriver from './FindDriver'
import HomePage from './HomePage'
import DriversList from './DriversList'
import ContactUs from './ContactUs'
import ContactSuccess from './ContactSuccess'
import MapContainer from './MapContainer';
import CurrentLocation from './CurrentLocations';


class App extends Component{	

	state = {
        name:'',
        email:'',
        };
	
	AddContact = (contact) =>{

		const newcontact = contact;

		this.setState({
		  name: newcontact.name, 
		  email: newcontact.email
		})
	  }

	render(){
		return(
			<BrowserRouter>
				<div className="App">
					<Navbar/>
					<Switch>
						<Route exact path='/' component= {HomePage} />
						<Route path= '/find-driver' component= {FindDriver} />
						<Route path ='/new-driver' component={AddDriver} />
						<Route path = '/drivers-list' component = {DriversList} />
						<Route path = '/contact-us' render={() => (<ContactUs AddContact={this.AddContact} />)}/>
						<Route path = '/contact-success' render={() => (<ContactSuccess AddedContact={this.state} />)}/>
						<Route path = '/map' component={MapContainer}/>
						<Route path = '/current-position' component={CurrentLocation}/>
					</Switch>	
					
				</div>
			</BrowserRouter>
		);
	}
}

export default App;