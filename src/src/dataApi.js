import axios from "axios";

export const fetchDiscussions = (userId) =>{
      return  axios.get(`/home/discussions/${userId}`)
            .then(resp => resp.data.records)
            .catch(error =>{
                console.error(error);
            }                
            );

}