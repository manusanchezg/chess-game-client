import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function StandardButton(props) {
  const button = {
    backgroundColor: "#F8F4F9",
    color: "black",
    display: "flex",
    flexDirection: "column",
    width: "250px",
    maxHeight: "90px",
    padding: "15px"
  };

  const link = {
    textDecoration: "none",
    color: "#262626",
  };

  return (
    <Link to="/game" style={link} onClick={() => props.setPlayingTime(props.time)}>
      <Button variant="contained" className="Button" style={button}>
        <h3>{props.title}</h3>
        <p>{props.time ? props.time : null}</p>
      </Button>
    </Link>
  );
}
