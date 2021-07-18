export const team_members = (state = [], action) => {
    const storeStates = {
        'LOADING_TEAM_MEMBERS': state,
        'ADD_TEAM_MEMBERS': action.payload
    }
    return typeof storeStates[action.type] !== "undefined" ? storeStates[action.type] : state 
}