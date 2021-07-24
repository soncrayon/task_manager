export const tasks = (state = {
    tasks: {},
    task_percentages: {
        "Active": 0,
        "On Hold": 0,
        "Complete": 0,
        "Cancelled": 0
    }
}, action) => {
    const storeStates = {
        'LOADING_TASKS': state,
        'LOADING_TASK_PERCENTAGES': state,
        'ADD_TASKS': {...state, tasks:action.payload},
        'ADD_TASK_PERCENTAGES': {...state, task_percentages: action.payload}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}