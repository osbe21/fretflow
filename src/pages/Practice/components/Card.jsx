function Card({ title, children }) {
    return (
        <>
            <div className="relative my-2 p-4 inline-block border border-[#A5A5A5] rounded-xl">
                <h5 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 text-lg text-gray-600 bg-neutral-100">
                    {title || ""}
                </h5>
                {children}
            </div>
        </>
    );
}

export default Card;
