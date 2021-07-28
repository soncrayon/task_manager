export const assigners = (state = [], action) => {
    const storeStates = {
        'LOADING_ASSIGNERS': state,
        'LOADING_TOP_ASSIGNERS': state,
        'ADD_ASSIGNERS': {...state, assigners: action.payload},
        'ADD_TOP_ASSIGNERS': {...state, top_assigners: action.payload}
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}