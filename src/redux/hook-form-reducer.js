

const SET_FAMALY_DATA = 'SET_FAMALY_DATA';



let initialState = {
    firstName: 'ILGIZ',
    lastName: 'Salakov',
    initials: ' SSS '
 }

const hookFormReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FAMALY_DATA:
            return {
                ...state,
                 firstName: action.data.firstName,
                 lastName: action.data.lastName,
                 initials: action.data.initials

            }

        default:
            return state
    }
}




export const updateAction = (data) => ({type: SET_FAMALY_DATA, data })



export default hookFormReducer