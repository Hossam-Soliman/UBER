import React from 'react'
import {Link} from 'react-router-dom'

 
const Navbar =() =>{

    return(
        <nav>
            <div className="myNav">
                <div className="container">
                    <div className="row ">
                        
                        <span className="col-sm text-left"><Link to = '/'><img src="https://scontent.fkwi3-1.fna.fbcdn.net/v/t1.15752-9/92609874_302530367383054_879839508172898304_n.jpg?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=WmcKbcOgDm0AX9U4oAW&_nc_ht=scontent.fkwi3-1.fna&oh=ce40f496fa8f66638863a12a8088482e&oe=5EB27345" alt=''></img></Link></span>
                        
                        <span className="col-sm-2 text-right"><Link to = '/find-driver'>Find Driver</Link></span>
                        <span className="col-sm-2 text-right"><Link to = '/drivers-list'>Drivers-List</Link></span>
                        <span className="col-sm-2 text-right"><Link to = '/contact-us'>Contact us</Link></span>
                        
                    </div>
                </div>
            </div>
        </nav>
        
    )
}

export default Navbar