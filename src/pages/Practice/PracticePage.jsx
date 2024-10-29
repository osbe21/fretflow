import { useEffect, useRef, useState } from "react";
import MicrophoneMissingModal from "./components/MicrophoneMissingModal";
import NoteCard from "./components/NoteCard";
import CompletedNotesCard from "./components/CompletedNotesCard";
import TimerCard from "./components/TimerCard";
import Fretboard from "./components/Guitar/Fretboard";
import useInterval from "../../hooks/useInterval";
import useNoteDetector from "../../hooks/useNoteDetector";
import useMicrophonePermission from "../../hooks/useMicrophonePermission";

function PracticePage({ noteList }) {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [completedNotesCount, setCompletedNotesCount] = useState(0);
    const [isInCorrectNoteCooldown, setIsInCorrectNoteCooldown] =
        useState(false);
    const [noteToPlay, setNoteToPlay] = useState({});
    const correctNoteAudio = useRef(null);
    const remainingNotes = useRef(noteList);
    const hasMicrophonePermission = useMicrophonePermission();
    const noteDetector = useNoteDetector(hasMicrophonePermission);

    useEffect(() => {
        correctNoteAudio.current = new Audio("../../assets/correct_ding.mp3");
        selectRandomNoteToPlay();
    }, []);

    const timerInterval = useInterval(() => {
        if (!noteDetector) return;

        setTimeElapsed((s) => s + 1);
    }, 1000);

    const noteDetectionInterval = useInterval(() => {
        if (!noteDetector || isInCorrectNoteCooldown) return;

        const detectedNote = noteDetector();

        console.log(detectedNote);

        if (detectedNote == noteToPlay.note) {
            onCorrectNotePlayed();
        }
    }, 100);

    function onCorrectNotePlayed() {
        remainingNotes.current = remainingNotes.current.filter(
            (n) => n !== noteToPlay
        );

        correctNoteAudio.current.play();

        setCompletedNotesCount((count) => ++count);
        setIsInCorrectNoteCooldown(true);

        setTimeout(() => {
            if (remainingNotes.current.length == 0) {
                clearInterval(noteDetectionInterval);
                clearInterval(timerInterval);
            } else {
                setIsInCorrectNoteCooldown(false);
                selectRandomNoteToPlay();
            }
        }, 1500);
    }

    function selectRandomNoteToPlay() {
        const index = Math.floor(Math.random() * remainingNotes.current.length);
        const note = remainingNotes.current[index];

        setNoteToPlay(note);
    }

    // Loading permission
    if (hasMicrophonePermission == null) {
        return null;
    }

    // Permission denied
    if (!hasMicrophonePermission) {
        return <MicrophoneMissingModal show={!hasMicrophonePermission} />;
    }

    return (
        <>
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
