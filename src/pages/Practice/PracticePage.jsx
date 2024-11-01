import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import practiceStepsArray from "../../utils/practiceStepsArray";
import MicrophoneMissingModal from "./components/MicrophoneMissingModal";
import CompletedModal from "./components/CompletedModal";
import NoteCard from "./components/NoteCard";
import CompletedNotesCard from "./components/CompletedNotesCard";
import TimerCard from "./components/TimerCard";
import Fretboard from "./components/Guitar/Fretboard";
import useInterval from "../../hooks/useInterval";
import useNoteDetector from "../../hooks/useNoteDetector";
import useMicrophoneState from "../../hooks/useMicrophoneState";
import dingAudio from "../../assets/correct_ding.mp3";

function PracticePage() {
    const { practiceStep } = useParams();

    const [timerIntervalDelay, setTimerIntervalDelay] = useState(null);
    const [noteDetectionIntervalDelay, setNoteDetectionIntervalDelay] =
        useState(null);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [completedNotesCount, setCompletedNotesCount] = useState(0);
    const [isInCorrectNoteCooldown, setIsInCorrectNoteCooldown] =
        useState(false);
    const [noteToPlay, setNoteToPlay] = useState({});
    const correctNoteAudio = useRef(null);
    const remainingNotes = useRef(practiceStepsArray[practiceStep]);
    const microphoneState = useMicrophoneState();
    const noteDetector = useNoteDetector(microphoneState);

    useEffect(() => {
        correctNoteAudio.current = new Audio(dingAudio);
        setNoteToPlay(remainingNotes.current[0]);
    }, []);

    useEffect(() => {
        if (!noteDetector) return;

        setTimerIntervalDelay(1000);
        setNoteDetectionIntervalDelay(100);
    }, [noteDetector]);

    useInterval(() => {
        setTimeElapsed((s) => s + 1);
    }, timerIntervalDelay);

    useInterval(() => {
        if (isInCorrectNoteCooldown) return;

        const detectedNote = noteDetector();

        console.log(detectedNote);

        if (detectedNote == noteToPlay.note) {
            onCorrectNotePlayed();
        }
    }, noteDetectionIntervalDelay);

    function onCorrectNotePlayed() {
        remainingNotes.current.splice(0, 1);

        correctNoteAudio.current.play();

        setCompletedNotesCount((count) => ++count);
        setIsInCorrectNoteCooldown(true);

        setTimeout(() => {
            if (remainingNotes.current.length == 0) {
                setTimerIntervalDelay(null);
                setNoteDetectionIntervalDelay(null);
            } else {
                setIsInCorrectNoteCooldown(false);
                setNoteToPlay(remainingNotes.current[0]);
            }
        }, 1500);
    }

    // if (microphoneState == null) {
    //     return <div>Loading</div>;
    // } else if (microphoneState == "prompt") {
    //     return <div>TRYKK TILLAT!!</div>;
    // } else if (microphoneState == "denied") {
    //     return <MicrophoneMissingModal show={microphoneState == "denied"} />;
    // }

    return (
        <>
            <CompletedModal
                isOpen
                timeElapsed={110}
                recommendedMaxTime={120}
                currentPracticeStep={parseInt(practiceStep)}
            />

            <main className="mt-10 max-h-[450px] h-2/3 flex justify-center items-center gap-20">
                <div className="w-60 h-full flex justify-between items-stretch flex-col">
                    <NoteCard
                        noteToPlay={noteToPlay.note}
                        isCorrectNotePlayed={isInCorrectNoteCooldown}
                    />

                    <CompletedNotesCard
                        completed={completedNotesCount}
                        total={
                            completedNotesCount + remainingNotes.current.length
                        }
                    />

                    <TimerCard timeElapsed={timeElapsed} />
                </div>
                <Fretboard markedStringIndex={noteToPlay.string} />
            </main>
        </>
    );
}

export default PracticePage;
