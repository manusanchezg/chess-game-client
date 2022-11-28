import StandardButton from "./StandardButton";
import "./TimeButtons.css";

export default function TimeButtons(props) {
  const time = [1, 3, 5, 10, 30, null];
  const title = [
    "Bullet",
    "Blitz",
    "Blitz",
    "Rapid",
    "Classical",
    "No time limit",
  ];
  const playTitle = [
    "Play with a friend",
    "Play with the computer",
    "Play with a friend online",
  ];

  function handleTime(time) {
    if (time) return time > 1 ? `${time} minutes` : `${time} minute`;
    return "";
  }

  return (
    <div className="buttons-container">
      <div className="clock-button-container">
        {time.map((t, idx) => (
          <StandardButton
            key={`time-${t}`}
            title={title[idx]}
            time={handleTime(t)}
            onClick={() => props.setTime(t)}
            className="Button"
          />
        ))}
      </div>
      <div className="play-button-container">
        {playTitle.map((title) => (
          <StandardButton title={title} key={title} />
        ))}
      </div>
    </div>
  );
}
