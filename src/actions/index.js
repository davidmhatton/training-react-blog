import jsonPlaceholder from "../apis/JsonPlaceholder";

export const fetchPosts = () =>  async dispatch => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: 'FETCH_POSTS', payload: response})
};
