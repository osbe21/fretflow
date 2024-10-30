import { useEffect, useState } from "react";

export default function useMicrophoneState() {
    const [microphoneState, setMicrophoneState] = useState(null);

    useEffect(() => {
        navigator.permissions.query({ name: "microphone" }).then((status) => {
            setMicrophoneState(status.state);

            status.addEventListener("change", () =>
                setMicrophoneState(status.state)
            );
        });
    }, []);

    return microphoneState;
}
