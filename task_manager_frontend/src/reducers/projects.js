export const projects = (state = [], action) => {
    const storeStates = {
        'LOADING_PROJECTS': state,
        'ADD_PROJECTS': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}