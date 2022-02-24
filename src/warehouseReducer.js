const warehouseIntialState = [];

const warehouseReducer = (state = warehouseIntialState, action) => {
  console.log({ action });
  switch (action.type) {
    case "SET_DATA":
      return action.payload;
    case "UPDATE_WAREHOUSE_AT_INDEX":
      const { editedDetails, index } = action.payload;
      const warehouses = [...state];
      warehouses[index] = editedDetails;
      return warehouses;
    default:
      return state;
  }
};

export default warehouseReducer;
