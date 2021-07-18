export const assigners = (state = [], action) => {
    const storeStates = {
        'LOADING_ASSIGNERS': state,
        'ADD_ASSIGNERS': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}