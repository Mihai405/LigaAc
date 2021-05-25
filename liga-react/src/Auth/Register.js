import { useState } from "react";

export function Register() {

    const [values, setValues] = useState({
        username: '',
        password: '',
        retypePassword: '',
        firstName: '',
        lastName: '',
      });
      const [errors, setErrors] = useState({
        username: '',
        password: '',
        retypePassword: '',
        firstName: '',
        lastName: '',
      });
    
      function handleInputChange(e) {
        setErrors({ ...errors, [e.target.id]: '' });
        setValues({ ...values, [e.target.id]: e.target.value });
      }
    
      function formIsValid() {
        const newErrors = { ...errors };
        let isValid = true;
    
        if (values.username === '') {
          newErrors.username = 'Username is required!';
          isValid = false;
        }
    
        setErrors(newErrors);
    
        return isValid;
      }

    async function handleSubmit(e) {
        e.preventDefault();
        // const safeValues = { ...values };
        // delete safeValues.retypePassword;
        const { retypePassword, ...safeValues } = values;
        if (!formIsValid()) {
          return;
        }
    
        const response = await fetch("http://127.0.0.1:8000/core/users/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(safeValues),
        }).then((res) => res.json());
    
        console.log(response);
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
            value={values.email}
          />
          {errors.email !== '' ? <strong>{errors.email}</strong> : null}
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
        <div>
          <label htmlFor="retypePassword">Retype Password</label>
          <input
            type="password"
            id="retypePassword"
            onChange={handleInputChange}
            value={values.retypePassword}
          />
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
      </form>
    );
}