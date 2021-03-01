import React from "react";
import ReactDOM from "react-dom";

class SideNav extends React.Component {
    constructor(props) {
      super(props)
    }
  
    getSideBar() {
      return (<div style={{width:'30%'}}> 
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
              <li   style={{background: '#2c3e50' }} className="sidebar-brand">
                <a style={{height:'100%',textAlign:'center', color : '#999999' }} href="#">
                  Get A Quote
                </a>
              </li>
              <li  style={{background: '#2c3e50' }} className="sidebar-brand">
                <a style={{height:'100%',textAlign:'center', color: '#999999' }} href="#">
                  My Orders
                </a>
              </li>
            </ul>
          </div>
        </div>)
    }
    render() {
      return (
  
        <div style={{overflow:''}} id="wrapper">
          {this.getSideBar()}
        </div>
      );
    }
  }

  export default SideNav;