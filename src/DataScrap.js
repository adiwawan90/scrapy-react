import React from 'react';
// import axios from 'axios';

class Datascrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      errors: null
    };
  }
// scrapping using scrapyRT 
  componentDidMount() {
    fetch(
      'https://storage.scrapinghub.com/items/427748?apikey=470eb897efea4b36976d4989cc77c7e0&format=json'
    )
      .then(response => response.json())
      .then(resData => {
        console.log(resData)
        //console.log(JSON.stringify(resData))
        //do your logic here
        //let datas = resData.items
        this.setState({ datas: resData }); //this is an asynchronous function
      });
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
        {this.state.datas.map((data, index) => {
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
    );
  }
}

export default Datascrap;