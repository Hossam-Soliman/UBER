import React, { Component } from 'react';
import axios from 'axios';


var coordinates = []

class AddDriver extends Component {
    
    state = {
        
            name: '',
            rank: '',
            geometry: {
                coordinates:[]
            }
    }

    handleChange = (e) =>{

        this.setState ({
            [e.target.id]: e.target.value
        })
        
    }

    handleLng = (e) =>{

        coordinates = [parseInt(e.target.value)];    
    }

    handleLat = (e) =>{

        
        const location = [...coordinates, parseInt(e.target.value)]
     
        this.setState ({
            geometry:{
                coordinates: location
            }
        })
    }

   
    createDriver = (e) =>{
        e.preventDefault();
        const driver = {
            name: this.state.name,
            rank: this.state.rank,
            geometry:{
                coordinates: this.state.geometry.coordinates
            }
        };


        axios.post('http://localhost:4000/api/drivers', driver)
        .then(res => console.log(res.data));   


        document.getElementById('name').value = '';
        document.getElementById('rank').value = '';
        document.getElementById('lng').value = '';
        document.getElementById('lat').value = '';
      
    }
    
    
   render(){
       return(
        <div className=" homepage form-wrapper">
            <form onSubmit = {this.createDriver}>
                <input autoComplete="off" type="text" placeholder="Add name" id = "name" onChange ={this.handleChange} ></input>
                <input autoComplete="off" type="text" placeholder="Add rank" id = "rank" onChange ={this.handleChange} ></input>
                <input autoComplete="off" type="text" placeholder="Add longitude" id = "lng" onChange ={this.handleLng} ></input>
                <input autoComplete="off" type="text" placeholder="Add latitude" id = "lat" onChange ={this.handleLat} ></input>
                <button >Add driver</button>
            </form>
        </div>
      
       )}
  }

  export default AddDriver