import axios from 'axios';
import * as types from '../constants/actionTypes';

// Send get request to server for get user history from the database
// Input: userInfo is a object with user_name, token, password
// export const signIn = (userInfo) => {
//   if(userInfo.token !== null){
//     return (dispatch) => {
//       axios
//       .get(`http://localhost:3000/oauth/github/`, userInfo)
//       .then((response) => {
//         dispatch({
//           type: types.LOGIN,
//           payload: response.data,
//         });
//       });
//   }} else {
//     return (dispatch) => {
//       axios
//       .get(`http://localhost:3000/auth/user/`, userInfo)
//       .then((response) => {
//         dispatch({
//           type: types.LOGIN,
//           payload: response.data,
//         });
//       });
//     }
//   }
// };

// // Send post request to server for add user to the database
// // Input: userInfo is a object with user_name, icon, email, token, password
// export const signUp = (userInfo) => {
//   if(userInfo.token !== null){
//     return (dispatch) => {
//       axios
//       .post(`http://localhost:3000/oauth/github/`, userInfo)
//       .then((response) => {
//         dispatch({
//           type: types.SIGN_IN,
//           payload: response.data,
//         });
//       });
//   }} else {
//     return (dispatch) => {
//       axios
//       .post(`http://localhost:3000/auth/user/`, userInfo)
//       .then((response) => {
//         dispatch({
//           type: types.SIGN_IN,
//           payload: response.data,
//         });
//       });
//     }
//   }
// };

// Send get request to server for resource (tech name)
// Input: resource name
export const getResource = (resource) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/resource/${resource.toLowerCase()}`)
      .then((response) => {
        dispatch({
          type: types.GET_RESOURCE,
          payload: response.data,
        });
      });
  };
};

// Update the current topic to be rendered on screen (used once for initial load)
// Input: current topic (fetched from props)
export const updateTopic = (topic) => {
  return (dispatch) => {
    dispatch({
      type: types.UPDATE_TOPIC,
      payload: topic,
    });
  };
};

// Send post request to server to add a new resource
// Input: resource name in the parameter and resource object to add to DB in body
export const addResource = (resource) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3000/resource/${resource.name}`, resource)
      .then((response) => {
        dispatch({
          type: types.ADD_RESOURCE,
          payload: response.data,
        });
      });
  };
};

// Send put request to increase like count
// Input: Id of the resource and the technology associated with the resource
export const upvote = (id, tech) => {
  return (dispatch) => {
    axios
      .put('http://localhost:3000/resource/upvote', { id: id, tech: tech })
      .then((response) => {
        dispatch({
          type: types.UPVOTE,
          payload: response.data,
        });
      });
  };
};

// Send put request to increase like count
// Input: Id of the resource and the technology associated with the resource
export const downvote = (id, tech) => {
  return (dispatch) => {
    axios
      .put('http://localhost:3000/resource/downvote', { id: id, tech: tech })
      .then((response) => {
        dispatch({
          type: types.DOWNVOTE,
          payload: response.data,
        });
      });
  };
};
