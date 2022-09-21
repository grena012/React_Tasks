import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "./Schemas";
import "./Page.css";

const initialValues={
    name:"",
    password:"",
    email:"",
    mobile_no:"",
};

  
const Users=()=>{
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik
    ({initialValues:initialValues,
    validationSchema: signUpSchema,
    onSubmit : (values)=>{
        console.log(values);
    },
});
    return(
        <>
         <header>
             <nav className="Home">
             <Link to="/">Home</Link><br/>
             <Link to="/Users">Users</Link>
             <br/>
             <Link to="/Admin">Admin</Link>
             </nav>
         </header>
             <div className="body">
             <h1>Users Form</h1>
             <form onSubmit={handleSubmit}>
                 <div className="input-block">
                     <label htmlFor="name" className="input-label">Name :-</label>
                     <input type="name" 
                     autoComplete="off" 
                     name="name"  id="name" 
                     placeholder="firstName " 
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     /><br/>
                     {errors.name && touched.name?(<span className="form-error">{errors.name}</span>) : null}
                 </div>
                 <br/>
                 <br/>
                 <div className="input-block">
                     <label htmlFor="password" className="input-label">password :-</label>
                     <input type="password"
                      autoComplete="off"
                      name="password"  
                      id="password"
                      placeholder="Password "
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /><br/>
                      {errors.password && touched.password?(<span className="form-error">{errors.password}</span>) : null}
                 </div>
                 <br/>
                 <br/>
                 <div className="input-block">
                     <label htmlFor="email" className="input-label">Email Id :-</label>
                     <input type="email" 
                     autoComplete="off" 
                     name="email"  
                     id="email" 
                     placeholder="Example@gmail.com "
                     value={values.email}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     /><br/>
                     {errors.email && touched.email?(<span className="form-error">{errors.email}</span>) : null}
                 </div>
                 <br/>
                 <br/>
                 <div className="input-block">
                     <label htmlFor="mobile_num" className="input-label">mobile_No :-</label>
                     <input type="number" 
                     autoComplete="off" 
                     name="mobile_no" 
                     id="mobile_no" 
                     placeholder="Mobile Number "
                     value={values.mobile_no}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     /><br/>
                     {errors.mobile_no && touched.mobile_no?(<span className="form-error">{errors.mobile_no}</span>) : null}
                 </div>
                 <br/>
                 <br/>
                 <button className="button" type="submit">Ragister </button>

             </form>
             </div>
        </>
    );
}
export default Users;