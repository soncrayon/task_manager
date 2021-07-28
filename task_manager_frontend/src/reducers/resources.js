export const resources = (state = [], action) => {
    const storeStates = {
        'LOADING_RESOURCES': state,
        'ADD_RESOURCES': {...state, resources: action.payload},
        'LOADING_TOP_EXECUTORS': state,
        'ADD_TOP_EXECUTORS': {...state, top_resources: action.payload}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}