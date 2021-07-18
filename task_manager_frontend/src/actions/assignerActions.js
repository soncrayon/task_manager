export const fetchAssigners = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_ASSIGNERS'});
        fetch('http://localhost:3000/assigners')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_ASSIGNERS', payload: resp})
        })
    }
} 