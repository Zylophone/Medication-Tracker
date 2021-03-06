import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import Moment from "moment";

function Medication(props) {

  const medStyle = {
    backgroundColor: "lightgrey",
    paddingLeft: "5px",
    borderWidth: "thin",
    borderStyle: "solid"
  }

  const removeButtonStyle = {
    marginRight: "5px"
  }

  const timeSinceTaken = new Moment().to(props.timeTaken);

  let medicineDetails =
    <div style={medStyle}>
      <h3>{props.name}</h3>
      <h5>Medicine/Pill Description:</h5>
      <p>{props.pillDescription}</p>
      <h5>Doctors Orders:</h5>
      <p>{props.doctorsOrders}</p>
      <h5>Side Effects:</h5>
      <p>{props.sideEffects}</p>
      <h5>Last Taken:</h5>
      <p>{timeSinceTaken}</p>
    </div>
  if (props.currentRoute === "/delete"){
    return(
      <div>
        {medicineDetails}
        <Button
          style={removeButtonStyle}
          bsSize="small"
          bsStyle="danger"
          onClick={() => {props.handleRemovingMedicine(props.id)}}>Discontinue Medicine</Button>
      </div>
    );
  } else {
    return(
      <div>
        {medicineDetails}
      </div>
    );
  }
}

Medication.propTypes = {
  name: PropTypes.string,
  pillDescription: PropTypes.string,
  doctorsOrders: PropTypes.string,
  sideEffects: PropTypes.string,
  timeTaken: PropTypes.number,
  handleRemovingMedicine: PropTypes.func,
  currentRoute: PropTypes.string
};

export default Medication;
