import { useEffect, useState, useRef } from "react";
import * as Pitchfinder from "pitchfinder";

export default function useNoteDetector(hasMicrophonePermission = true) {
    const midiNoteToChar = [
        "C",
        "C#",
        "D",
        "D#",
        "E",
        "F",
        "F#",
        "G",
        "G#",
        "A",
        "A#",
        "B",
    ];

    function frequencyToMidiNote(f) {
        const noteNum = 12 * (Math.log(f / 440) / Math.log(2));
        return Math.round(noteNum) + 69;
    }

    const [noteDetector, setNoteDetector] = useState(null);
    const mediaStreamRef = useRef(null);
    const audioCtxRef = useRef(null);

    useEffect(() => {
        async function setupNoteDetector() {
            const constraints = {
                audio: {
                    echoCancellation: false,
                    noiseSuppression: true,
                    channelCount: 1,
                },
            };

            const stream = await navigator.mediaDevices.getUserMedia(
                constraints
            );

            mediaStreamRef.current = stream;

            const audioCtx = new AudioContext({ latencyHint: "playback" });
            audioCtxRef.current = audioCtx;

            const streamSource = audioCtx.createMediaStreamSource(stream);
            const gain = audioCtx.createGain();
            const analyser = audioCtx.createAnalyser();

            streamSource.connect(gain);
            gain.connect(analyser);
            gain.gain.value = 2;
            analyser.fftSize = 2048;

            const data = new Float32Array(analyser.fftSize);
            const detector = Pitchfinder.AMDF({
                sampleRate: audioCtx.sampleRate,
                minFrequency: 40,
                maxFrequency: 1400,
                sensitivity: 0.05,
            });

            function getNote() {
                analyser.getFloatTimeDomainData(data);
                const frequency = detector(data);

                if (frequency) {
                    let note = frequencyToMidiNote(frequency);
                    return midiNoteToChar[note % 12];
                }
                return null;
            }

            setNoteDetector(getNote);
        }

        // if (hasMicrophonePermission) {
        setupNoteDetector();
        // } else {
        // setNoteDetector(null);
        // }

        return () => {
            if (mediaStreamRef.current) {
                mediaStreamRef.current
                    .getTracks()
                    .forEach((track) => track.stop());
            }

            if (audioCtxRef.current) {
                audioCtxRef.current.close();
            }

            console.log("Cleaned up note detector");
        };
    }, [hasMicrophonePermission]);

    return noteDetector;
}
