import React, { Component } from "react";
import {connect} from 'react-redux'
import changeColor from '../actions/uiActions'

class Header extends Component {


  render() {
    const navStyle = {
        backgroundColor: this.props.color,
      };

    return (
      <nav style={navStyle} className="nav justify-content-center">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/about">
          About
        </a>
        <button onClick={this.props.changeColor} type="button" className="btn btn-primary">click-me</button>
      </nav>
    );
  }
}
const mapStateToProps=(state)=>({
color : state.colorReducer.color
})
//Connects component to Store

const mapDispatchToProps=(dispatch)=>{
  return{
  changeColor : ()=> dispatch(changeColor())
}}
//

export default connect(mapStateToProps,mapDispatchToProps)(Header);

// connect() => HOC
//HOC(Header)