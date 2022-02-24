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
    <div className="details-container">
      <form onSubmit={onSubmit}>
        <div className="details-input-parent">
          <label>Name: </label>
          <input
            className="details-input"
            onChange={HandleChangeName}
            value={editedDetails.name}
          ></input>
        </div>
        <br />
        <div className="details-input-parent">
          <label>City: </label>
          <input
            className="details-input"
            onChange={HandleChangeCity}
            value={editedDetails.city}
          ></input>
        </div>
        <br />
        <div className="details-input-parent">
          <label>Cluster: </label>
          <input
            className="details-input"
            onChange={HandleChangeCluster}
            value={editedDetails.cluster}
          ></input>
        </div>
        <br />
        <div className="details-input-parent">
          <label>Live status: </label>
          <input
            className="details-input"
            onChange={HandleChangeLiveStatus}
            value={editedDetails.is_live}
          ></input>
        </div>
        <br />
        <br />
        <div className="details-page-buttons">
          <button className="details-page-button a" type="submit">
            Save
          </button>
          <button
            className="details-page-button b"
            onClick={() => setEditPage(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
