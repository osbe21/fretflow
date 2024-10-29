function PracticeCompletedModal({ isOpen }) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="w-1/3 flex flex-col gap-8 items-center bg-white p-10 rounded-lg shadow-lg">
                    <TbMicrophoneOff size={"4em"} />
                    <h2 className="text-2xl text-center font-semibold">
                        Can't Access Microphone!
                    </h2>
                    <p className="text-lg text-center">
                        Access to the microphone is neccessary for pitch
                        detection to work. Enable it from the top left of your
                        browser, then refresh the page.
                    </p>
                </div>
            </div>
        </>
    );
}

export default PracticeCompletedModal;
