import { useRef, useEffect } from "react";

export default function useInterval(callback, delay) {
    const intervalID = useRef(null);
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => savedCallback.current();

        if (typeof delay == "number") {
            intervalID.current = setInterval(tick, delay);

            return () => clearInterval(intervalID.current);
        }
    }, [delay]);

    return intervalID.current;
}
