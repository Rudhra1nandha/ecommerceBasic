import React from 'react';


const About = () => {
  var mycolor = {
    color: 'blue',
    backgroundColor: 'skyblue',
    padding: '30px',
    height: 'minHeight',
    width: '500px',
    marginLeft: '10px',
    textAlign: 'center',
    fontSize: '76px',
    marginTop: '100px'
  }
  var mycolor1 = {
    color: 'violet',
    backgroundColor: 'teal',
    padding: '30px',
    height: 'minHeight',
    width: '500px',
    marginLeft: '300px',
    textAlign: 'center',
    fontSize: '76px',
    marginTop: '100px'
  }
  var col={
    
    textAlign:'justify',
    fontSize:'20px',
    padding:'30px',
    marginTop:'50px',
    color:'white'

  }
  var col1={
    backgroundColor:'#3A3B3C',
    borderRadius:'90px',
    marginTop:'90px'
  }
  return (
    <div>
      <div className="container d-flex "style={col1}>
        <div className="row ">
          <div className="col-md-6 justify-content-center text-center px-30 py-5 mx-8" style={mycolor}>

            <h1>STARTING $ 99 </h1>
            <h4>Deals on clothing, footware, beauty & more...</h4>

          </div>
          <div className="col-md-6 justify-content-center text-center px-30 py-5 mx-8" style={mycolor1}>

            <h1>STARTING $ 99 </h1>
            <h4>Deals on jewelery, electronics & more...</h4>
          </div>
          <div style={col}>
            <p>To drive our message home, here are some examples of great product descriptions from leading brands across two different industries.</p>
            <br></br>
            <p>The brand also highlights certification it has received from industry bodies, like the non-GMO project. It provides a one-line serving suggestion, which makes this description really enticing too. There’s even additional A+ content, which features recipes and mouth-watering photos.</p>
            <br/>
            <p>Its product descriptions also highlight suitable skin types, key ingredients and where the cream can be used. This information will answer the FAQs of its target audience and help it rank for lots of long-tail search terms at the same time.

Like Quaker Oats, Cetaphil also uses bullet points, as well as capital letters, to improve readability.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;