export const add = () => {
  return {
    type: "ADD"
  };
};

export const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data
  };
};

export const updateWareHouseAtIndex = (editedDetails, index) => {
  return {
    type: "UPDATE_WAREHOUSE_AT_INDEX",
    payload: {
      editedDetails,
      index
    }
  };
};

export const setSelectedCity = (city) => {
  return {
    type: "SET_SELECTED_CITY",
    payload: city
  };
};

export const setSelectedCluster = (cluster) => {
  return {
    type: "SET_SELECTED_CLUSTER",
    payload: cluster
  };
};

export const setSelectedSpaceAvailable = (space) => {
  return {
    type: "SET_SELECTED_SPACE_AVAILABLE",
    payload: space
  };
};

export const setClickedWarehouseIndex = (index) => {
  return {
    type: "SET_CLICKED_WAREHOUSE_INDEX",
    payload: index
  };
};

export const setSearchText = (value) => {
  return {
    type: "SET_SEARCH_TEXT",
    payload: value
  };
};
