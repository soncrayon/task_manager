export const milestones = (state = [], action) => {
    const storeStates = {
        'LOADING_MILESTONES': state,
        'ADD_MILESTONES': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}