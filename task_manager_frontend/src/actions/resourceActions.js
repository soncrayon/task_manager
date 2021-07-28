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

export const fetchTopExecutors = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TOP_EXECUTORS'});
        fetch('http://localhost:3000/resc/get_top_5')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_TOP_EXECUTORS', payload: resp})
        })
    }
}