function Fret({ marked = false }) {
    return (
        <>
            <div className="relative h-full flex justify-center items-center flex-1">
                {marked && <div className="rounded-full bg-black size-6"></div>}
            </div>
            <div className="w-0.5 h-full bg-black"></div>
        </>
    );
}

export default Fret;
