import axios from "axios";

export const fetchDiscussions = (userId) =>{
      return  axios.get(`/home/discussions/${userId}`)
            .then(resp => resp.data.records)
            .catch(error =>{
                console.error(error);
            }                
            );

}

export const fetchPostContent = (postId) =>{
      return  axios.get(`/home/discussions/Post/${postId}`)
            .then(resp => resp.data.records)
            .catch(error =>{
                console.error(error);
            }                
            );

}