import { useEffect, useState } from "react";

export default function useMicrophonePermission() {
    const [hasMicrophonePermission, setHasMicrophonePermission] =
        useState(null);

    useEffect(() => {
        navigator.permissions.query({ name: "microphone" }).then((status) => {
            setHasMicrophonePermission(status.state == "granted");

            status.addEventListener("change", () =>
                setHasMicrophonePermission(status.state == "granted")
            );
        });
    }, []);

    return hasMicrophonePermission;
}
