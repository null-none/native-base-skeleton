export const APP_START_LOADING = "app_start";

const initialState = {
  loading: false,
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export function loading() {
  return dispatch => {
    dispatch({
      type: APP_START_LOADING
    });
  };
}