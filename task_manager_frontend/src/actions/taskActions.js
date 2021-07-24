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

export const fetchTaskStatusPercentages = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TASK_PERCENTAGES'});
        fetch('http://localhost:3000/task_status_percentages')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_TASK_PERCENTAGES', payload: resp})
        })
    }
}