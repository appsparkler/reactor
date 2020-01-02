import {useState} from 'react'

const handleChange = (values, setValues, evt) => {
  setValues({
    ...values,
    [evt.target.name]: evt.target.value
  })
}

export default (initialState) => {
    const [values, setValues] = useState(initialState);
    return {
      values,
      handleChange: handleChange.bind(null, values, setValues)
    }
}
