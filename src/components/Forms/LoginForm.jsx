import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from "./PeaceOfForm/MyTextInput";
import MyCheckbox from "./PeaceOfForm/MyCheckBox";

const LoginForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    rememberLoginPassword: false, // added for our checkbox

                }}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, 'Must be more 6 characters')
                        .required('Required'),
                    rememberLoginPassword: Yup.boolean()
                        .oneOf([true, false])

                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <div>
                        <MyTextInput

                            name="login"
                            type="text"
                            placeholder="Input login"
                        />
                    </div>
                    <div>
                        <MyTextInput

                            name="password"
                            type="text"
                            placeholder="Input password"
                        />
                    </div>
                    <div>
                        <MyCheckbox name="rememberLoginPassword">
                            remember me
                        </MyCheckbox>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
};

export default LoginForm