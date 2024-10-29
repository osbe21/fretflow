import Card from "./Card";

function NoteCard({ noteToPlay, isCorrectNotePlayed }) {
    const textColor = isCorrectNotePlayed ? "text-green-500" : "text-zinc-700";
    const duration = isCorrectNotePlayed ? "duration-75" : "duration-1000";

    return (
        <Card>
            <div className="flex flex-col items-center">
                <h5 className="text-xl text-gray-600">Play the note</h5>
                <h3
                    className={
                        textColor +
                        " " +
                        duration +
                        " " +
                        "transition-colors ease-out my-2 text-6xl font-bold"
                    }
                >
                    {noteToPlay}
                </h3>
            </div>
        </Card>
    );
}

export default NoteCard;
