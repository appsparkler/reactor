import React from 'react';

export default () => (
  <form>

    <div className="form-group">
      <div className="small text-danger">Email error...</div>
      <input
        type="email"
        className="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
    </div>

    <div className="form-group">
      <small className="text-danger">Password error...</small>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>

    <div className="form-group form-check text-white">
      <input type="checkbox" className="form-check-input" />
      <label className="form-check-label">
        Check me out
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
)
