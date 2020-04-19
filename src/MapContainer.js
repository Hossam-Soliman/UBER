import React,{Component} from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

class MapContainer extends Component{
	
	
		
	render(){
		return(
            <div className="map ">
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={{width: '1200px', height:'600px'}}
                    initialCenter={{ lat: 29.142529, lng: 48.115176}}
                >

                    <Marker position={{ lat: 29.142529, lng: 48.115176}} />
                </Map>
            </div>
           
		);
	}
}


export default GoogleApiWrapper({
    apiKey: 'user your own api'
  })(MapContainer);
