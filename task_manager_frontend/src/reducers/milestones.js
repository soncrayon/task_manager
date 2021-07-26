export const milestones = (state = [], action) => {
    console.log(state)
    const storeStates = {
        'LOADING_MILESTONES': state,
        'ADD_MILESTONES': {...state, milestones: action.payload},
        'LOADING_MILS_OPEN_TASKS': state,
        'ADDING_MILS_OPEN_TASKS': {...state, open_tasks: action.payload}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}