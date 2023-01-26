import React, {useState} from "react";
import {useForm} from "react-hook-form";







const HookForm = (props)=>{
    const {register,reset, formState: { errors, isValid}, handleSubmit } = useForm({mode: "onBlur"})

    const onSubmit = (data)=>{
        alert(JSON.stringify(data))
        reset()
    }

    return ( <div>
        <h1>Login</h1>

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input {...register('firstName',
                        {required: 'Must fill',
                                minLength: {
                                        value: 5,
                                        message: 'Must be grater then 5'
                                } })}/>
                </label>
                <div style={{height: 40}}>{errors?.firstName && <p>{errors?.firstName?.message || "Not identified error" }</p>} </div>

                <label>
                    Last Name:
                    <input {...register('lastName',
                        {required: 'Must fill',
                            minLength: {
                                value: 5,
                                message: 'Must be grater then 3'
                            } })}/>

                </label>
                <div style={{height: 40}}>{errors?.lastName && <p>{errors?.lastName?.message || "Not identified error" }</p>} </div>

                <label htmlFor="name">Name</label>
                <input id="name" {...register('name', { required: true, maxLength: 30 })} />
                {errors.name && errors.name.type === "required" && <span>This is required</span>}
                {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> }

                <input type="submit" disabled={!isValid}/>
            </form>
        </div>

    </div>)
}

 export default HookForm