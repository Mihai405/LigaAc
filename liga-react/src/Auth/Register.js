import { useState } from "react";

export function Register() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        accountCreated:'',
      });
      const [errors, setErrors] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
      });
    
      function handleInputChange(e) {
        setErrors({ ...errors, [e.target.id]: '' });
        setValues({ ...values, [e.target.id]: e.target.value , accountCreated:''});
      }
    
      function formIsValid() {
        const newErrors = { ...errors };
        let isValid = true;
    
        if (values.username === '') {
          newErrors.username = 'Username is required!';
          isValid = false;
        }

        if (values.password === '') {
          newErrors.password = 'Password is required!';
          isValid = false;
        }

        if (values.email === '') {
          newErrors.email = 'Email is required!';
          isValid = false;
        }
    
        setErrors(newErrors);
    
        return isValid;
      }

    async function handleSubmit(e) {
        e.preventDefault();
  
        if (!formIsValid()) {
          return;
        }
    
        const response = await fetch("http://127.0.0.1:8000/core/users/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }).then((res) => res.json());

        console.log(response);
        if(response.email && response.email[0]==="Enter a valid email address."){
          setErrors({...errors,email:"Enter a valid email address."}) 
        }

        if(response.username && response.username[0]==="A user with that username already exists."){
          setErrors({...errors, username:response.username[0]});
          setValues({...values , accountCreated:''});
        }

        if(response.username===values.username){
          setValues({...values , accountCreated:'Account created successfully'});
        }

      }

    return(
        <form onSubmit={handleSubmit} noValidate>
        <h1>Register</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={handleInputChange}
            value={values.username}
          />
          {errors.username !=="" ? <strong>{errors.username}</strong> : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={handleInputChange}
            value={values.password}
          />
          {errors.password !=="" ? <strong>{errors.password}</strong> : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleInputChange}
            value={values.retypePassword}
          />
           {errors.email !=="" ? <strong>{errors.email}</strong> : null}
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={handleInputChange}
            value={values.firstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={handleInputChange}
            value={values.lastName}
          />
        </div>
        <button type="submit">Register</button>
        <div>
          {values.accountCreated !=="" ? <strong>{values.accountCreated}</strong> : null}
        </div>
      </form>
    );
}