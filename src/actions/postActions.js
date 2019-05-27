import { FETCH_POSTS, NEW_POST } from   './types';
import axios from 'axios';

export function fetchPosts(){
    return function (dispatch) {
        // console.log('fetching posts')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            const result = res.data;
            dispatch({
                type: FETCH_POSTS,
                payload: result
            })
        })
    }
}