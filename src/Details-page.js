import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"; // version 5.2.0
import { updateWareHouseAtIndex } from "./actions";

const initialDetails = {
  id: "",
  name: "",
  city: "",
  cluster: "",
  is_live: ""
};
export default function DetailsPage() {
  const dispatch = useDispatch();

  const warehouses = useSelector((state) => state.warehouses);
  let { index } = useParams();
  index = index - 1;
  const data = warehouses[index];
  const navigate = useNavigate();
  const [editedDetails, setEditedDetails] = React.useState(initialDetails);
  React.useEffect(() => {
    setEditedDetails({
      id: data?.id,
      name: data?.name,
      city: data?.city,
      cluster: data?.cluster,
      is_live: data?.is_live
    });
  }, []);
  if (!data?.id) {
    navigate("/");
    return "";
  }

  const handleChange = (e) => {
    setEditedDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateWareHouseAtIndex(editedDetails, index));
    navigate("/");
  };

  const getInputField = (value, name) => {
    return (
      <div className="details-input-parent" key={name}>
        <div className="field">
          <label className="label">{name}</label>
          <div className="control">
            <input
              className="input"
              onChange={handleChange}
              value={value}
              name={name}
              disabled={name === "id"}
            />
          </div>
        </div>
        <br />
      </div>
    );
  };

  return (
    <div className="details-container">
      <form onSubmit={onSubmit}>
        {Object.keys(editedDetails).map((key) => {
          return getInputField(editedDetails[key], key);
        })}

        <div className="details-page-buttons">
          <button className="details-page-button a button" type="submit">
            Save
          </button>
          <Link to="/">
            <button className="details-page-button b button">Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
