import axios from 'axios';

const ADD_GUN = 'add';
const REMOVE_GUN = 'remove';
const USER_DATA = 'user_data'

const initState = {
  gun: 100,
  name: '李云龙',
  age: 20
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_GUN: {
      return { ...state, gun: state.gun + action.payload };
    }
    case REMOVE_GUN: {
      return { ...state, gun: state.gun + action.payload };
    }
    case USER_DATA: {
      return { ...state, ...action.payload }
    }
    default: {
      return state;
    }
  }
}

export function addGun(data) {
  return { type: ADD_GUN, payload: +data };
}

export function removeGun(data) {
  return { type: REMOVE_GUN, payload: -data };
}

export function addGunSync(data) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addGun(data));
    }, 1000);
  };
}

export function getUser() {
  return (dispatch) => {
    axios.get('/api/data').then(({ status, data }) => {
      if (status === 200) {
        dispatch(userData(data))
      }
    })
  }
}

export function userData(data) {
  return { type: USER_DATA, payload: data }
}