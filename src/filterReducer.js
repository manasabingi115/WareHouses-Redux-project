const filtereReducerIntialState = {
  selectedCity: "",
  selectedCluster: "",
  selectedSpaceAvailable: "",
  clickedWarehouseIndex: null,
  searchText: ""
};

const filtereReducer = (state = filtereReducerIntialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_CITY":
      return {
        ...state,
        selectedCity: action.payload
      };
    case "SET_SELECTED_CLUSTER":
      return {
        ...state,
        selectedCluster: action.payload
      };
    case "SET_SELECTED_SPACE_AVAILABLE":
      return {
        ...state,
        selectedSpaceAvailable: parseInt(action.payload)
      };
    case "SET_CLICKED_WAREHOUSE_INDEX":
      return {
        ...state,
        clickedWarehouseIndex: action.payload
      };

    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload
      };

    default:
      return state;
  }
};

export default filtereReducer;
