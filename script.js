
const studentsMarks = [
    [80, 70, 55],
    [45, 90, 75],
    [70, 60, 65]
];

function calculateQuizResults(studentsMarks) {
    const arr = []
    for (let i = 0; i < studentsMarks.length; i++){
        let total=0
        for (let j = 0; j < studentsMarks[i].length; j++){
            total += studentsMarks[i][j]
        }
        if (total> 200) {
            arr[i] = [total, "passed"]
        }
        else {
            arr[i] = [total, "failed"]
        }
    }
    return arr

}
console.log(calculateQuizResults(studentsMarks));