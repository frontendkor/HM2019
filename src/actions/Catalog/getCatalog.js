export const GET_CATALOG_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_CATALOG_SUCCESS = "GET_PRODUCTS_SUCCESS";

const getCatalog = () => {
  return dispatch => {
    dispatch({
      type: GET_CATALOG_REQUEST,
      payload: {
        wait: true
      }
    });
    let act = async () => {
      const url = `data/catalog/catalog.json`;
      try {
        let response = await fetch(url);
        let data = await response.json();
        dispatch({
          type: GET_CATALOG_SUCCESS,
          payload: {
            wait: false,
            products: data
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    act();
  };
};

export default getCatalog;
