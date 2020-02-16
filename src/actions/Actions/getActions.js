export const GET_ACTIONS_REQUEST = "GET_ACTIONS_REQUEST";
export const GET_ACTIONS_SUCCESS = "GET_ACTIONS_SUCCESS";

const getActions = () => {
  return dispatch => {
    dispatch({
      type: GET_ACTIONS_REQUEST,
      payload: {
        wait: true
      }
    });
    let act = async () => {
      try {
        let response = await fetch(`data/actions/actions.json`);
        let data = await response.json();

        dispatch({
          type: GET_ACTIONS_SUCCESS,
          payload: {
            wait: false,
            data: data
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    act();
  };
};

export default getActions;
