import Tasks from "./Tasks";
import {connect} from "react-redux";
import {addTaskAC, updateDescriptionAC, updateTaskNameAC} from "../../redux/tasksReducer";




let mapStateToProps =(state)=>{

    return{
        tasksPage: state.tasksPage
    }
}

let mapDispatchToProps =(dispatch)=>{

    return{
        updateTaskName: (currentTaskName)=>{
            dispatch(updateTaskNameAC(currentTaskName))
         },
        updateTaskDescription: (currentTaskDescription)=>{
            dispatch(updateDescriptionAC(currentTaskDescription))
        },
        addTask: ()=>{
            dispatch(addTaskAC())
        }
    }
}

const TasksContainer = connect(mapStateToProps,mapDispatchToProps)(Tasks)

export default TasksContainer