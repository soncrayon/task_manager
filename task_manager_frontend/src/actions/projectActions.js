export const fetchProjects = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_PROJECTS'});
        fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then(resp => {
            dispatch({type: 'ADD_PROJECTS', payload: resp})
        })
    }
}