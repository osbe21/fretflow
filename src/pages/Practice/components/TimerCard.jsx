import { WiTime4 } from "react-icons/wi";
import Card from "./Card";

function TimerCard({ timeElapsed }) {
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")} s`;
    }

    return (
        <Card title="Time">
            <div className="my-4 flex items-center gap-4">
                <WiTime4 size={"2.5em"} color="#52525b" />
                <h1 className="text-4xl text-zinc-700 font-bold">
                    {formatTime(timeElapsed)}
                </h1>
            </div>
        </Card>
    );
}

export default TimerCard;
