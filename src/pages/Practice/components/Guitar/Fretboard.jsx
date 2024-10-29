import Fret from "./Fret";
import String from "./String";

function Fretboard({ markedStringIndex }) {
    return (
        <>
            {/* Guitar */}
            <div className="relative w-1/2 h-60 flex items-stretch border border-black">
                {/* Headstock */}
                <div className="flex-[0.2]"></div>
                {/* Nut */}
                <div className="w-2 bg-slate-300"></div>
                {/* Frets */}
                <div className="flex-[2] flex items-stretch">
                    <Fret />
                    <Fret />
                    <Fret marked />
                    <Fret />
                    <Fret marked />
                    <Fret />
                    <Fret marked />
                    <Fret />
                    <Fret marked />
                    <Fret />
                    <Fret />
                </div>
                {/* Strings */}
                <ol className="absolute z-10 inset-0 flex flex-col justify-around items-stretch">
                    {[...Array(6).keys()].map((i) => (
                        <String
                            key={i}
                            thickness={`${(3.5 / 5) * i + 1}px`}
                            marked={i == markedStringIndex}
                        />
                    ))}
                </ol>
            </div>
        </>
    );
}

export default Fretboard;
