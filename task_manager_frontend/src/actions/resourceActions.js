export const fetchResources = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_RESOURCES'});
        fetch('http://localhost:3000/resources')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_RESOURCES', payload: resp})
        })
    }
}