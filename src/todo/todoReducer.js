import {
    TODO_DESCRIPTION_CHANGE,
    TODO_SEARCHED,
    TODO_CLEAR
} from './todoActions';

const INITIAL_VALUE = { description: '', list: [] };

export default (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case TODO_DESCRIPTION_CHANGE:
            return { ...state, description: action.payload };
        case TODO_SEARCHED:
            return { ...state, list: action.payload };
        case TODO_CLEAR:
            return { ...state, description: '' };
        default:
            return state;
    }
}