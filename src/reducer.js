const ADD_GUN = 'add';
const REMOVE_GUN = 'remove';

export function reducer(state = 0, action) {
  switch (action.type) {
    case ADD_GUN: {
      return state += 1;
    }
    case REMOVE_GUN: {
      return state -= 1;
    }
    default: {
      return state = 10;
    }
  }
}

export function addGun() {
  return { type: ADD_GUN };
}

export function removeGun() {
  return { type: REMOVE_GUN };
}

export function addGunSync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addGun());
    }, 1000);
  };
}