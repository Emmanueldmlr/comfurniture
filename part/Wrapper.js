import React, { useState, useEffect, Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Others from './Others';


export default function Wrapper(AuthComponent) {

    return class LandingWrapper extends Component {
     
      constructor(props) {
        super(props)
        this.state = {
           active: false
        }
        this.handleUpdate = this.handleUpdate.bind(this);
      }
      handleUpdate(value) {
        this.setState({ active: value})
      }
      render() {
        return (
          <>
              <Header handleUpdate = {this.handleUpdate} />
              <Others handleUpdate = {this.handleUpdate} active={this.state.active}/>
              <AuthComponent {...this.props}  />
              <Footer/>
              
           
          </>
        )
      }
    }
}