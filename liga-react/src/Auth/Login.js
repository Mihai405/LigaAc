import { useState } from 'react';
import { useAuthContext } from './AuthContext';

export function Login() {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const {onLogin} =useAuthContext();

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
    console.log(response);

    if(response.token){
      onLogin(response.token,response.user);
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
      <button type="submit">Login</button>
    </form>
  );
}
