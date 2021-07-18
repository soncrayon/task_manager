export const tasks = (state = [], action) => {
    const storeStates = {
        'LOADING_TASKS': state,
        'ADD_TASKS': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}