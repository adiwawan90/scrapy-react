import React, { Component } from 'react'
import './Carous.css'

export default class Carousel extends Component {
  render() {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 carrous" src={require('./images/Banner-gaming_laptops.jpg')} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 carrous" src={require("./images/acer-nitro.jpg")} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 carrous" src={require("./images/GTX1050-Round-Up.jpg")} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                <ol class="carousel-indicators ol">
                    <li data-target="#carouselExampcolor: teal;leIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
            </div>

        </div>
    )
  }
}
