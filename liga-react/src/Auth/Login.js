import { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuthContext } from './AuthContext';

export function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const { user , onLogin } =useAuthContext();

  function handleInputChange(e) {
    setValues({ ...values, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const response=await fetch('http://127.0.0.1:8000/token-auth/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(values),
    }).then((res)=>res.json());

    const { token }=response;

    if(token){
      onLogin(token);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h1>Login</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={handleInputChange}
          value={values.username}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleInputChange}
          value={values.password}
        />
      </div>

      <button type="submit">
        Login
      </button>

      {user && <>
        {console.log({user})}
        <Redirect to='/' />
      </>}
    </form>
  );
}
