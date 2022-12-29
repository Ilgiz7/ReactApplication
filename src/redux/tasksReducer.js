const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
const UPDATE_TASK_DESCRIPTION = 'UPDATE_TASK_DESCRIPTION';


let initialState = {
    tasks: [{ id: "" , name: "" , content: "" } ],
    taskName: '',
    taskDescription: '',



}

const tasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_TASK_NAME:
            return {
                ...state,
                taskName: action.currentTaskName
            }

        case UPDATE_TASK_DESCRIPTION:
            return {
                ...state,
                taskDescription: action.currentTaskDescription
            }

        case ADD_TASK:
            return {
                ...state,
                tasks: [ ...state.tasks , { id: Date.now() , name: state.taskName , content: state.taskDescription }],
                taskName: '',
                taskDescription: ''
            }

        default:
            return state
    }


}

export const updateTaskNameAC = (currentTaskName) => ({type: UPDATE_TASK_NAME, currentTaskName})
export const updateDescriptionAC = (currentTaskDescription) => ({type: UPDATE_TASK_DESCRIPTION, currentTaskDescription})
export const addTaskAC = () => ({type: ADD_TASK })


export default tasksReducer