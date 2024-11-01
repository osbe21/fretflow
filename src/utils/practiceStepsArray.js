const practiceStepsArray = [
    Array(3)
        .fill(["A", "B", "C", "D", "E", "F", "G"])
        .flat()
        .map((note) => ({
            note,
            string: 5,
        })),
    [{ note: "A", string: 0 }],
];

export default practiceStepsArray;
