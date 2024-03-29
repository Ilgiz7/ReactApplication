<<<<<<< HEAD
import React from "react";
import {useForm} from "react-hook-form";
import {useFormik} from "formik";
import s from './Login.module.css'

const LoginForm = (props)=>{
    return (<div>
        <form>
            <div>
                <input placeholder="Login" />
            </div>
            <div>
                <input placeholder="Password"  />
            </div>
            <div>
                <input type={'checkbox'}  /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
  </div>
    )
}


// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const SignupForm = () => {
    // Pass the useFormik() hook initial form values, a validate function that will be called when
    // form values change or fields are blurred, and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
           <div>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
           </div>
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <button type="submit">Submit</button>
        </form>
    );
};

=======
import React from 'react';
import LoginForm from "../Forms/LoginForm";
>>>>>>> c689ba414cccb983ccd5c0856ab033eb22cbf835


const Login = (props)=>{
    return ( <div>
        <h1>Login</h1>
<<<<<<< HEAD
        {/*<LoginForm/>*/}
        <div>
            <SignupForm/>

        </div>
    </div>)
=======
        <LoginForm/>

  </div>)
>>>>>>> c689ba414cccb983ccd5c0856ab033eb22cbf835
}

 export default Login