import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";

const LoginForm = (props)=>{
    return (
        <form>
            <div>
                <Field placeholder="Login" component={"input"}/>
            </div>
            <div>
                <Field placeholder="Password"  component={"input"}/>
            </div>
            <div>
                <Field type={'checkbox'}  component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props)=>{
    return ( <div>
        <h1>Login</h1>
        <LoginReduxForm/>
    </div>)
}

 export default Login