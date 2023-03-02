import React from 'react';
import About from './about';

const contact=()=> {
  return (
    <div>
        <About/>
        <div className="container">
            <div className="row">
                <h1 style={{textAlign:'center',marginTop:'50px'}}>Contact us</h1>
                <hr/>
                <div className="col-md-4 "style={{marginBottom:'100px', marginTop:'60px'}}>
                    <h4>Get to Know us</h4>
                    <a href="#">About Us</a><br/>
                    <a href="#">Careers</a><br/>
                    <a href="#">Press Release</a><br/>
                    <a href="/Home">Ecommerce</a><br/>
                </div>
                <div className="col-md-4" style={{marginBottom:'100px', marginTop:'60px'}}>
                    <h4>Connect With us</h4>
                    <a href="https://www.facebook.com/">Facebook</a><br/>
                    <a href="https://twitter.com/">Twitter</a><br/>
                    <a href="https://www.instagram.com/">Instagram</a><br/>
                </div>
                <div className="col-md-4" style={{marginBottom:'100px', marginTop:'60px'}}>
                    <h4>Make Money with us</h4>
                    <a href="/">sell on Ecommmerce</a><br/>
                    <a href="/">sell under Ecommerce Acceleration</a><br/>
                    <a href="/">Become an Affiliate</a><br/>
                    <a href="/">Pay on Ecommerce</a><br/>
                </div>

            </div>
            <hr/>
            <hr/>
        </div>
    </div>
  )
}

export default contact
