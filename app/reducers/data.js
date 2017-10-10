const initialState = {
    posts: [],
    post: {},
    fetching: false,
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_LIST_REQUEST':
        return {...state, fetching: true};
    case 'FETCH_REQUEST':
        return {...state, fetching: true};
    case 'FETCH_LIST_SUCCESS':
        return {...state, posts: action.data, fetching: false};
    case 'FETCH_SUCCESS':
        return {...state, post: action.data, fetching: false};
    case 'FETCH_LIST_ERROR':
        return {...state, error: action.error, fetching: false};
    case 'FETCH_ERROR':
        return {...state, error: action.error, fetching: false};
    default:
        return state;
    }
};

export default dataReducer;
