import { WiTime4 } from "react-icons/wi";
import Card from "./Card";
import formatTime from "../../../utils/formatTime";

function TimerCard({ timeElapsed }) {
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
