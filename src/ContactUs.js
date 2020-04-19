import React,{Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'


class ContactUs extends Component{
	
	state = {
        name:'',
        email:'',
        content: ''
        };
        
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

	handleSubmit = (e) =>{
        e.preventDefault();

        const newContact = {
            name: this.state.name,
            email: this.state.email,
            content: this.state.content
        }

        axios.post('http://localhost:4000/api/contact', newContact)
        .then(res => console.log(res.data));   

        this.props.AddContact(this.state);


        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('content').value = '';     
        
        this.props.history.push('/contact-success')
    }
    

	render(){

		return(

            <div className="contactus container " >
                <h1>Contact US!</h1>
                <p>we are always here for you</p>
                
                <div className="contact-form">
                   <form onSubmit={this.handleSubmit} action="/"  >
                        <label>Full name</label>
                        <input autoComplete="off" type ="text" id = "name" onChange={this.handleChange}></input>
                        <label>Email address</label>
                        <input autoComplete="off" type="email" id="email" onChange={this.handleChange}></input>
                        <label>Please share your complain with us ...</label>
                        <textarea autoComplete="off" type="text" id="content" onChange={this.handleChange}></textarea><br></br>
                        <button>Send</button>
                   </form>
                </div>
                
            </div>

		);
	}
}

export default withRouter(ContactUs) ;