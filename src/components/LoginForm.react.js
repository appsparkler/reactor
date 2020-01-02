import React from 'react';
import useFormValidation from '../hooks/FormValidation.react'

const INITIAL_STATE = {
  email: '',
  password: ''
}

export default () => {
  let {values, errors, handleChange, handleSubmit} = useFormValidation(INITIAL_STATE)
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-danger">{values.errors}</p>
      <div className="form-group">
        {
          errors.email && <div className="small text-danger">
            {errors.email}
          </div>
        }
        <input
          type="email"
          className="form-control"
          name="email"
          value={values.email}
          autoComplete="username"
          onChange={handleChange}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        {
          errors.password && <div className="small text-danger">
            {errors.password}
          </div>
        }
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password..."
          autoComplete="current-password"
          onChange={handleChange}
          value={values.password}
        />
      </div>

      <div className="form-group form-check text-white">
        <input type="checkbox" className="form-check-input" />
        <label className="form-check-label">
          Include in mailing list?
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}
