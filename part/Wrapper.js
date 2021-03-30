import React, { useState, useEffect, Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Others from './Others';


export default function Wrapper(AuthComponent) {
    
    return class LandingWrapper extends Component {
     
      constructor(props) {
        super(props)

      }
      render() {
        return (
          <>
              <Header/>
              <Others/>
              <AuthComponent {...this.props}  />
              <Footer/>
              
           
          </>
        )
      }
    }
}