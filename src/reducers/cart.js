const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const exist = state.find((elem) => elem.id === state.id);
      if (exist) {
        const index = state.indexOf(exist);
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              title: action.title,
              price: action.price,
            },
          ],
        };
      }
      break;
    default:
      return state;
  }
};

export default reducer;
