import {useState} from 'react'

const handleChange = (values, setValues, evt) => {
  setValues({
    ...values,
    [evt.target.name]: evt.target.value
  })
}

function validate(values) {
  let errors = {};
  if(!values.password) {
    errors.password = "password is required..."
  }
  if(!values.email) {
    errors.email = "email is required..."
  }
  return errors;
}

function handleSubmit(values, setValues, setErrors, evt) {
  evt.preventDefault();
  evt.stopPropagation();
  const errors = validate(values);
  setErrors(errors);
}

export default (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    return {
      values,
      errors,
      handleChange: handleChange.bind(null, values, setValues),
      handleSubmit: handleSubmit.bind(null,
          values, setValues, setErrors
      )
    }
}
