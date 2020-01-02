import React from 'react';
import useFormValidation from '../hooks/FormValidation.react'

const INITIAL_STATE = {
  email: '',
  password: ''
}

export default () => {
  let {values, handleChange} = useFormValidation(INITIAL_STATE)
  return (
    <form>
      <p>{values.email}</p>
      <div className="form-group">
        <div className="small text-danger">Email error...</div>
        <input
          type="email"
          className="form-control"
          name="email"
          value={values.email}
          onChange={handleChange}
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
          Include in mailing list?
        </label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
