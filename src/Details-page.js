import React from "react";

export default function DetailsPage({
  clickedWarehouseData,
  setEditPage,
  updateWareHouseAtIndex,
  index
}) {
  const data = clickedWarehouseData;
  const [editedDetails, setEditedDetails] = React.useState({
    id: data.id,
    name: data.name,
    city: data.city,
    cluster: data.cluster,
    is_live: data.is_live
  });

  const HandleChangeName = (e) => {
    e.preventDefault();
    setEditedDetails({ ...editedDetails, name: e.target.value });
  };
  const HandleChangeCity = (e) => {
    e.preventDefault();
    setEditedDetails({ ...editedDetails, city: e.target.value });
  };
  const HandleChangeCluster = (e) => {
    e.preventDefault();
    setEditedDetails({ ...editedDetails, cluster: e.target.value });
  };
  const HandleChangeLiveStatus = (e) => {
    e.preventDefault();
    setEditedDetails({ ...editedDetails, is_live: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setEditPage(false);
    updateWareHouseAtIndex(editedDetails, index);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={HandleChangeName} value={editedDetails.name}></input>
        <br />
        <input onChange={HandleChangeCity} value={editedDetails.city}></input>
        <br />
        <input
          onChange={HandleChangeCluster}
          value={editedDetails.cluster}
        ></input>
        <br />
        <input
          onChange={HandleChangeLiveStatus}
          value={editedDetails.is_live}
        ></input>
        <br />
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => setEditPage(false)}>Cancel</button>
      </form>
    </div>
  );
}
