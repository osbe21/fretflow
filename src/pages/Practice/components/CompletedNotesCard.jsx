import { IoMusicalNotesOutline } from "react-icons/io5";
import Card from "./Card";

function CompletedNotesCard({ completed, total }) {
    return (
        <Card title="Completed">
            <div className="my-4 flex items-center gap-4">
                <IoMusicalNotesOutline size={"2.5em"} color="#52525b" />
                <h1 className="text-4xl text-zinc-700 font-bold">
                    {completed.toString()} / {total.toString()}
                </h1>
            </div>
        </Card>
    );
}

export default CompletedNotesCard;
