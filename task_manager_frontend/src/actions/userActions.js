export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS'});
        fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_USERS', payload: resp})
        })
    }
}