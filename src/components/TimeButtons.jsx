import StandardButton from "./StandardButton";
import "./TimeButtons.css";

export default function TimeButtons(props) {
  return (
    <div className="buttons-container">
      <div className="clock-button-container">
        <StandardButton title="Bullet" time="1 minute" className="Button"/>
        <StandardButton title="Blitz" time="3 minutes" />
        <StandardButton title="Blitz" time="5 minutes" />
        <StandardButton title="Rapid" time="10 minutes" />
        <StandardButton title="Classical" time="30 minutes" />
        <StandardButton title="No time limit" />
      </div>
      <div className="play-button-container">
        <StandardButton title="Play with a friend" />
        <StandardButton title="Play with the computer" />
        <StandardButton title="Play with a friend online" />
      </div>
    </div>
  );
}
