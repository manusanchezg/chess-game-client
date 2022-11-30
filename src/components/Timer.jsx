import "./Timer.css";

function Timer(props) {

  function secondsToString(seconds) {
    let hour = Math.floor(seconds / 3600);
    hour = hour < 10 ? "0" + hour : hour;

    let minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? "0" + minute : minute;

    let second = seconds % 60;
    second = second < 10 ? "0" + second : second;
    
    return hour + ":" + minute + ":" + second;
  }

  return (
    <div className="timer" id={props.id}>
      {secondsToString(props.remainingTime)}
    </div>
  );
}

export default Timer;
