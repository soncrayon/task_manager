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