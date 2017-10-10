import axios from 'axios';

function fetchPostsRequest() {
    return {
        type: 'FETCH_REQUEST',
    };
}

function fetchPostsSuccess(data) {
    return {
        type: 'FETCH_SUCCESS',
        data
    };
}

function fetchPostsError(error) {
    return {
        type: 'FETCH_ERROR',
        error
    };
}

export function fetchPostRequestFromAPI() {
    return dispatch => {
        dispatch(fetchPostsRequest());

        return axios.get('/posts').then((response) => {
            dispatch(fetchPostsSuccess(response.data));
        }).catch((error) => fetchPostsError(error));
    };
}
