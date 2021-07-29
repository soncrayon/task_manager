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

export const fetchTopAssigners = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TOP_ASSIGNERS'});
        fetch('http://localhost:3000/assg/get_top_5')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_TOP_ASSIGNERS', payload: resp})
        })
    }
}

export const fetchProjTopAssigners = (projID) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_TOP_ASSIGNERS'});
        fetch(`http://localhost:3000//project/get_top_5_assg/${projID}`)
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_TOP_ASSIGNERS', payload: resp})
        })
    }
}