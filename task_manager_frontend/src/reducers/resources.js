export const resources = (state = [], action) => {
    const storeStates = {
        'LOADING_RESOURCES': state,
        'ADD_RESOURCES': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}