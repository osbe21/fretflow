function String({ thickness, marked }) {
    const css = {
        height: marked ? "6px" : thickness,
        backgroundColor: marked ? "red" : "black",
    };

    return (
        <>
            <li className="flex-1 flex flex-col justify-center items-stretch">
                <div style={css}></div>
            </li>
        </>
    );
}

export default String;
