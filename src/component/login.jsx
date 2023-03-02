import React from 'react';


const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 style={{ color: 'white', backgroundColor: 'lightgreen', padding: '20px', margin: '30px', textAlign: 'center' }}>Log-In <i className="fa fa-sign-in"  ></i></h1>
                </div>
                <h1 style={{ marginTop: '40px' }}><label>Username : <input type="text" placeholder="Email / User Id" /></label></h1>

                <h1 style={{ marginTop: '40px' }}><label>Password : <input style={{ marginLeft: '10px' }} type="text" placeholder="1234@5" /></label></h1>
                
                    <div className="col-md-4">
                        <button type="submit" style={{ marginTop: '50px', padding: '15px', fontSize: '20px', textAlign: 'center', backgroundColor: 'lightgreen' }}>Submit</button>
                    </div>
            </div>
        </div>
    )
}

export default Login;