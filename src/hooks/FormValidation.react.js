import {useState} from 'react'

const handleChange = (values, setValues, evt) => {
  setValues({
    ...values,
    [evt.target.name]: evt.target.value
  })
}
function handleSubmit(values, setValues, evt) {
  evt.preventDefault();
  evt.stopPropagation();
  console.log(evt, values)
}
export default (initialState) => {
    const [values, setValues] = useState(initialState);
    return {
      values,
      handleChange: handleChange.bind(null, values, setValues),
      handleSubmit: handleSubmit.bind(null, values, setValues)
    }
}
