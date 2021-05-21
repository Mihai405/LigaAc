import { useState } from "react";



export function Register() {

    const [values,setValues]=useState({
        email:"",
        password:"",
        retypePassword:"",
        firstName:"",
        lastName:"",
    });

    function handleInputChange(e){
        setValues({...values,[e.target.id]:[e.target.value]});
    }

    return(
       <form>

            <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleInputChange} value={values.email}/>
            </div>

            <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleInputChange} value={values.password}/>
            </div>

            <div>
            <label htmlFor="retypePassword">Retype password</label>
            <input type="password" id="retypePassword" onChange={handleInputChange} value={values.retypePassword}/>
            </div>

            <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={handleInputChange} value={values.firstName}/>
            </div>

            <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={handleInputChange} value={values.lastName}/>
            </div>

       </form>
    );
}