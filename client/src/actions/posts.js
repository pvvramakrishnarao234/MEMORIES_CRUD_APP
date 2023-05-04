import * as api from '../api'
import {FETCH_ALL,UPDATE,LIKE,DELETE,CREATE} from '../constants/actionTypes'
//Action creators

export const getPosts = ()=> async(dispatch) =>{

    try{
        const {data} = await api.fetchPosts();
        // console.log(data);
        const action = {type: FETCH_ALL, payload:data};
        dispatch(action);

    }catch(error){
        // const action = {type: 'FETCH_ERROR', payload:error.message};
        // dispatch(action);
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const updatePost = (id,post) => async(dispatch) => {
  try{
    const { data } = await api.updatePost(id,post);
    dispatch({type: UPDATE, payload: data})
  }catch(error){
      console.log(error.message);
  }
}

export const deletePost = (id) => async(dispatch) =>{
  try{
    await api.deletePost(id);
    dispatch({type: DELETE,payload: id})
  }catch(error){
    console.log(error);
  }
}

export const likePost = (id) => async(dispatch) =>{
  try{
    const {data} = await api.likePost(id);
    dispatch({type:LIKE,payload: data})
  }catch(error){
    console.log(error);
  }
}