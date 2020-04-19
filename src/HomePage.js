import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Footer from './Footer';


function HomePage() {
    return(
        <div className="HomePage text-center container">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://sun9-32.userapi.com/c858224/v858224972/1c3000/UUR6ug9Ft3U.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://sun9-46.userapi.com/c858224/v858224972/1c2fec/rUmfBWR_5q8.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://sun9-10.userapi.com/c858224/v858224972/1c300a/kA28rBJ0Izw.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
           
        <Footer/>    
        </div>
        
    );


  }
  
export default HomePage;
