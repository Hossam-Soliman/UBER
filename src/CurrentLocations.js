import React, { Component } from "react";

var lat;
var lng;

class CurrentLocation extends Component {
    constructor(props){
        super(props);
        this.state = {
          drivers:[]
        }
      }
    
      getData(){
        setTimeout(() => {

            fetch('http://localhost:4000/api/drivers?lng=' + lng + '&lat=' + lat, { mode: 'no-cors'}).then(response=>{
                return response.json();
                }).then( data => {
                    this.setState({
                        drivers: data
                    });
                console.log(this.state);
                })

        }, 5000)
      }

      componentDidMount(){
        navigator.geolocation.getCurrentPosition(function(position) {
			lat =  position.coords.latitude;
      lng = position.coords.longitude;
      
			console.log(lat, lng)
			
		  });     
        this.getData();
      }

    
  render() {

    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}


export default CurrentLocation