import React, { Component } from 'react'
import './style.css'

export default class Banner extends Component {
  render() {
    return (
        <div className="container">
            <div class="row">
            <div class="col-md-4">
                <figure class="snip1581"><img class="card-img-top shop-item-image" src={require("./images/ASUS-ROG.jpg")}
                        alt="Card cap"/>
                    <figcaption>
                        <h3 class="title1">The</h3>
                        <h3 class="title2">Blancpain</h3>
                        <h3 class="title3">Collection</h3>
                    </figcaption><a href="#"></a>
                </figure>
            </div>
            <div class="col-md-4">
                <figure class="snip1581"><img class="card-img-top shop-item-image" src={require("./images/images-acer.jpeg")}
                        alt="Card cap"/>
                    <figcaption>
                        <h3 class="title1">The</h3>
                        <h3 class="title2">Rollex</h3>
                        <h3 class="title3">Collection</h3>
                    </figcaption><a href="#"></a>
                </figure>
            </div>
            <div class="col-md-4">
                <figure class="snip1581"><img class="card-img-top shop-item-image" src={require("./images/images-msi.jpeg")}
                        alt="Card cap"/>
                    <figcaption>
                        <h3 class="title1">The</h3>
                        <h3 class="title2">Patek Philippe</h3>
                        <h3 class="title3">Collection</h3>
                    </figcaption><a href="#"></a>
                </figure>
            </div>
        </div>
    </div>
    )
  }
}
