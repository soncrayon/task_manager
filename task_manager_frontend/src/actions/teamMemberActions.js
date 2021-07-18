export const fetchTeamMembers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TEAM_MEMBERS'});
        fetch('http://localhost:3000/team_members')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_TEAM_MEMBERS', payload: resp})
        })
    }
}