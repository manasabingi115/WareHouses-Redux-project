import React from "react";

export default function DetailsPage({ clickedWarehouseData, setEditPage }) {
  const data = clickedWarehouseData;
  const [editedDetails, setEditedDetails] = React.useState({
    id: data.id,
    name: data.name,
    city: data.city,
    cluster: data.cluster,
    liveStatus: data.is_live
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
    setEditedDetails({ ...editedDetails, liveStatus: e.target.value });
  };
  console.log(editedDetails);
  const onSubmit = (e) => {
    e.preventDefault();
    setEditPage(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={HandleChangeName} value={editedDetails.name}></input>
        <input onChange={HandleChangeCity} value={editedDetails.city}></input>
        <input
          onChange={HandleChangeCluster}
          value={editedDetails.cluster}
        ></input>
        <input
          onChange={HandleChangeLiveStatus}
          value={editedDetails.liveStatus}
        ></input>
        <br />
        <button type="submit">Submit</button>
        <button onClick={() => setEditPage(false)}>Cancel</button>
      </form>
    </div>
  );
}
