import placeHolder from './../../apis/placeHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => {
    return async function(dispatch, getState){
        await dispatch(fetchPosts());

        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(userId => dispatch(fetchUser(userId)))
            .value();
    }
}

export const fetchPosts = () => async dispatch => {
        const response = await placeHolder.get('/posts');

        dispatch({type: 'FETCH_POSTS',  payload: response.data})
}


export const fetchUser = (id) => async dispatch => {
    const response = await placeHolder.get(`/users/${id}`);
    console.log(response)
    dispatch({ type: 'FETCH_USERS', payload: response.data })
}