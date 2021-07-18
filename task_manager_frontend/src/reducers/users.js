export const users = (state = [], action) => {
    const storeStates = {
        'LOADING_USERS': state,
        'ADD_USERS': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}