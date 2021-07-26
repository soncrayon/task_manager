export const fetchMilestones = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_MILESTONES'});
        fetch('http://localhost:3000/milestones')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_MILESTONES', payload: resp})
        })
    }
}

export const fetchOpenTasksPerMilestone = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_MILS_OPEN_TASKS'});
        fetch('http://localhost:3000//active_tasks_per_milestone')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADDING_MILS_OPEN_TASKS', payload: resp})
        })
    }
}