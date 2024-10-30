import { TbMicrophoneOff } from "react-icons/tb";
import Modal from "../../../components/Modal";

function MicrophoneMissingModal({ show }) {
    if (!show) return null;

    return (
        <Modal>
            <div className="w-80 flex flex-col gap-8 justify-center items-center">
                <TbMicrophoneOff size={"4em"} />
                <h2 className="text-2xl text-center font-semibold">
                    Can't Access Microphone!
                </h2>
                <p className="text-lg text-center">
                    Access to the microphone is neccessary for pitch detection
                    to work. Enable it from the top left of your browser, then
                    refresh the page.
                </p>
            </div>
        </Modal>
    );
}

export default MicrophoneMissingModal;
