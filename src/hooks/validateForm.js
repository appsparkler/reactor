export default (values, props) => {
  const errors = {};

  // email validation
  if (!values.email) {
    errors.email = 'Email is required...';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  // password validation
  if(!values.password.trim()) {
    errors.password = 'Password is required...'
  } else if(values.password.length < 6) {
    errors.password = 'Password must be atleast 6 characters...'
  }
  return errors;
};
