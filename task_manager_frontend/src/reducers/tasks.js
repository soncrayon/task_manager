export const tasks = (state = {}, action) => {
    const storeStates = {
        'LOADING_TASKS': state,
        'LOADING_TASK_PERCENTAGES': state,
        'ADD_TASKS': {...state, tasks:action.payload},
        'ADD_TASK_PERCENTAGES': {...state, dash_data: action.payload}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}