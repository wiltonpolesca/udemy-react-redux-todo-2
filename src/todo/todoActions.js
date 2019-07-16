import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const TODO_DESCRIPTION_CHANGE = "TODO_DESCRIPTION_CHANGED";
export const TODO_SEARCHED = "TODO_SEARCHED";
export const TODO_CLEAR = "TODO_CLEAR";

export const changeDescription = (event) => ({
    type: TODO_DESCRIPTION_CHANGE,
    payload: event.target.value
});

export const search = () => {

    //Get the description from state using redux-thunk. it ins't a good practice
    return (dispatch, getState) => {
        const description = getState().todo.description;
        let search = description ? `&description__regex=/${description}/` : '';
        const response = axios.get(`${URL}?sort=createdAt${search}`)
            .then(resp => dispatch({type: TODO_SEARCHED, payload: resp.data}));
    };
}

export const add = (description) => {
    //Using multi-thunk middleware
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()));
    }
}

export const markAsDone = (todo) => {
    //Using multi-thunk middleware
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()));
    }
}

export const markAsPending = (todo) => {
    //Using multi-thunk middleware
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()));
    }
}

export const remove = (todo) => {
    //Using multi-thunk middleware
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()));
    }
}

export const clear = () => {
    return [{ type: TODO_CLEAR }, search()]
}