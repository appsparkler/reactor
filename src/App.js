import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
    <h1>Form Validation With Custom React Hooks...</h1>
    <form className='col-5 bg-dark p-3'>
      <div className="form-group">
        <div className="small text-danger">Email error...</div>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <small className="text-danger">Password error...</small>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group form-check text-white">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
