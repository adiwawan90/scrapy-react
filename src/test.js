import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
// import Hasil from './Hasil'
import './App.css';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 8,
      currentPage: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios
      .get(
        `https://storage.scrapinghub.com/items/427748?apikey=470eb897efea4b36976d4989cc77c7e0&format=json`
      )
      .then(res => {
        const data = res.data;
        // console.log(res.data);
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map(pd => (
          <React.Fragment>
            <div className='col-md-3 top'>
              <div className='card scrap'>
                <img
                  className='card-img-top shop-item-image'
                  src={pd.image}
                  alt='Card cap'
                />
                <div className='card-body'>
                  <h5 className='card-title shop-item-title'>{pd.title}</h5>
                  <p className='card-text'>
                    <a href='#'>EXPLORE NOW</a>
                  </p>
                  <div>
                    <span className='shop-item-price'>
                      {' '}
                      <b>Rp. {this.formatCurrency(pd.price)}</b>{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-sm-3 col-md-3">
                    <div className="thumbnail">
                        <img className="card-img-top shop-item-image" src={pd.image} alt="Card cap"/>
                        <div className="caption">
                          <h5 className="card-title shop-item-title">{pd.title}</h5>
                          <span 
className="shop-item-price"> <b>Rp. {this.formatCurrency(pd.price)}</b> </span>
                          <button className="btn btn-outline-info" type="button">details</button>
                        </div>
                    </div>
                </div> */}
          </React.Fragment>
        ));

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        });
      });
  }
  handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset
      },
      () => {
        this.receivedData();
      }
    );
  };

  /* Fungsi formatRupiah */
  formatCurrency = num => {
    var hasil = '';

    num = num.toString().replace(/\Rp|/g, '');
    if (isNaN(num)) num = '0';
    var sign = num === (num = Math.abs(num));
    num = Math.floor(num * 100 + 0.50000000001);
    var cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10) cents = '0' + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
      num =
        num.substring(0, num.length - (4 * i + 3)) +
        '.' +
        num.substring(num.length - (4 * i + 3));
    return (hasil = num);
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    //   console.log(this.state)
    return (
      <div className='container'>
        <div className='row'>{this.state.postData}</div>
        <div className='paginate'>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'page-item'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={5}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            //
            // breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            // containerClassName={'pagination'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            // activeClassName={'active'}
          />
        </div>
      </div>
    );
  }
}
