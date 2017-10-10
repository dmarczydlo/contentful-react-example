const initialState = {
    posts: [],
    fetching: false,
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_REQUEST':
        return {...state, fetching: true};
    case 'FETCH_SUCCESS':
        return {...state, posts: action.data, fetching: false};
    case 'FETCH_ERROR':
        return {...state, error: action.error, fetching: false};
    default:
        return state;
    }
};

export default dataReducer;
