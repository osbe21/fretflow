import { useNavigate } from "react-router-dom";
import Modal from "../../../components/Modal";
import formatTime from "../../../utils/formatTime";

function CompletedModal({
    isOpen,
    timeElapsed,
    recommendedMaxTime,
    currentPracticeStep,
}) {
    const navigate = useNavigate();

    function moveToNextStep() {
        navigate(`../${(currentPracticeStep + 1).toString()}`);
    }

    return (
        <div style={{ display: isOpen ? "block" : "none" }}>
            <Modal>
                <div className="w-80 flex flex-col items-center">
                    <h2 className="text-2xl font-bold">Practice Completed!</h2>
                    <h6 className="text-lg">Time:</h6>
                    <p className="text-lg">{formatTime(timeElapsed)}</p>

                    {timeElapsed <= recommendedMaxTime ? (
                        <button
                            onClick={moveToNextStep}
                            className="border rounded p-2"
                        >
                            Next step
                        </button>
                    ) : (
                        <p className="text-lg text-center">
                            We recommend you try to get under{" "}
                            {formatTime(recommendedMaxTime)} before moving to
                            the next step.
                        </p>
                    )}
                </div>
            </Modal>
        </div>
    );
}

export default CompletedModal;
