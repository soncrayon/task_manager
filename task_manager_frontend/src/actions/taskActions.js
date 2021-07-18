export const fetchTasks = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TASKS'});
        fetch('http://localhost:3000/tasks')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_TASKS', payload: resp})
        })
    }
}