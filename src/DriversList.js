import React,{Component} from 'react';
import axios from 'axios';


class DriversList extends Component{
	
	state = {

			drivers : []
        };
        
        componentDidMount() {
            axios.get('http://localhost:4000/api/drivers-list')
              .then(res => {
                this.setState({
                  drivers: res.data
                });
                
              })
              .catch((error) => {
                console.log(error);
              })
          }

	render(){

        const driversList = this.state.drivers.map((driver, index)=>{
            return(
                <tbody key={index}>
                    <tr>
                        <td>{driver.name}</td>
                        <td>{driver.rank}</td>
                        <td>{driver.available.toString()}</td>
                        <td><span className= {driver.available.toString()}></span></td>
                    </tr>
                </tbody>
            )
        })
        return (
            <div className="table">
                <table className="container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Rank</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    {driversList}
                </table>
            </div>
      );
	}
}

export default DriversList;