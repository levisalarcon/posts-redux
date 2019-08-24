import placeHolder from './../../apis/placeHolder';

export const fetchPosts = () => {
    return async function(dispatch){
        const response = await placeHolder.get('/posts');

        dispatch({type: 'FETCH_POSTS',  payload: response})
    }
}