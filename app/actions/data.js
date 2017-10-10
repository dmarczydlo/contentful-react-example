import axios from 'axios';

function fetchPostsRequest() {
    return {
        type: 'FETCH_LIST_REQUEST',
    };
}

function fetchPostsSuccess(data) {
    return {
        type: 'FETCH_LIST_SUCCESS',
        data
    };
}

function fetchPostsError(error) {
    return {
        type: 'FETCH_LIST_ERROR',
        error
    };
}

function fetchPostSingleRequest() {
    return {
        type: 'FETCH_REQUEST',
    };
}

function fetchPostSingleSuccess(data) {
    return {
        type: 'FETCH_SUCCESS',
        data
    };
}

function fetchPostSingleError(error) {
    return {
        type: 'FETCH_ERROR',
        error
    };
}

export function fetchPostSingleFromAPI(id) {
    return dispatch => {
        dispatch(fetchPostSingleRequest());

        return axios.get(`/api/post/${id}`).then((response) => {
            dispatch(fetchPostSingleSuccess(response.data));
        }).catch((error) => fetchPostSingleError(error));
    };
}

export function fetchPostRequestFromAPI() {
    return dispatch => {
        dispatch(fetchPostsRequest());

        return axios.get('/api/posts').then((response) => {
            dispatch(fetchPostsSuccess(response.data));
        }).catch((error) => fetchPostsError(error));
    };
}
