import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import {updateAction} from "../../redux/hook-form-reducer";


const Xooks = (props)=>{
        const { register, handleSubmit, setValue } = useForm({
            defaultValues: {
                firstName: 'name',
                lastName: 'famely',
            }
        });

    // Submit your data into Redux store
    const onSubmit = data => {
        props.updateAction(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} />
            <input {...register("lastName")} />
            <input {...register("initials")} />
            <input type="submit" />
        </form>
    <div>Имя: {props.firstName}</div>
    <div>Фамилия: {props.lastName}</div>
    <div>Инициалы: {props.initials} </div>
            </>
    );
}



let  mapStateToProps = (state)=>({
    firstName: state.hookFormState.firstName,
    lastName: state.hookFormState.lastName,
    initials: state.hookFormState.initials
})



export default  connect(mapStateToProps, {updateAction})(Xooks);