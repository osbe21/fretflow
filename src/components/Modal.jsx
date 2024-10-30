function Modal({ children }) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="inline-block bg-white p-10 rounded-lg shadow-lg">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Modal;
