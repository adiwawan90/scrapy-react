import React from 'react';

class Navbar extends React.Component {
    render(){
        return (
          <div className="menu fixed">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Adi Wawan</a>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-a" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-a" href="#">a</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a disabled" href="#">Disabled</a>
                </li> */}
              </ul>
              {/* <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form> */}
            </div>
          </nav>
          </div>
        )
    }
}

export default Navbar;