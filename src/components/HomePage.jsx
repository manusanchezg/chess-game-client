import { useState } from "react";
import Portal from "./Portal";
import TimeButtons from "./TimeButtons";

export default function HomePage(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const usernames = localStorage.getItem('usernames')
    // if(!usernames) handleOpen()

    return (
        <div className="HomePage">
            <h1>Chess with friends</h1>
            <TimeButtons setPlayingTime={props.setPlayingTime}/>
            <Portal open={open} setOpen={setOpen}/>
        </div>
    )
}