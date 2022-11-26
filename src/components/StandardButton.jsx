import Button from "@mui/material/Button";
import './StandardButton.css'

export default function StandardButton(props) {
  return (
    <Button variant="contained" className="Button">
      <h3>{props.title}</h3>
      <p>{props.time ? props.time : null}</p>
    </Button>
  );
}
