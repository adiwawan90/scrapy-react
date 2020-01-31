import React from 'react'

const Hasil = (props) => {
    console.log(props)
    return (
        <div className="container">
        <div className="row">
        {props.datas.map((data, index) => {
          return (
                <div className="col-md-4 top" key={index}>
                    <div className="card">
                        <img className="card-img-top shop-item-image" src={data.image} alt="Card cap"/>
                        <div className="card-body">
                          <h5 className="card-title shop-item-title">{data.title}</h5>
                          <span className="shop-item-price">{data.price}</span>
                          {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                          <button className="btn btn-primary shop-item-button" type="button">ADD TO CHART</button>
                        </div>
                    </div>
                </div>
          );
        })}
        </div>
      </div>
    )
}

export default Hasil;