import React from 'react'
import LoginForm from './components/LoginForm.react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
      <h1 className="my-2">Form Validation With Custom React Hooks...</h1>
      <div className='col-5 bg-secondary p-3'>
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
