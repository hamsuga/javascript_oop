function Student(nev) {
    this.name = nev;
    this.askedQuestionNum = 0;
}

Student.prototype.askQuestion = function() {
    console.log("???")
    this.askedQuestionNum++
}

function StudentWithWork(nev) {
    Student.call(this,nev)
    this.WorkDone = 0;
}
StudentWithWork.prototype.DoWork = function() {
    this.WorkDone++
}
Object.setPrototypeOf(StudentWithWork.prototype,Student.prototype)

const stu1 = new Student('Hamsuga')
const stu2 = new Student('Tyukodi')
const stu3 = new StudentWithWork('Charizard')


console.log(stu1)
console.log(stu2)
stu1.askQuestion()
console.log(stu1)
stu3.askQuestion()
console.log(stu3)
stu3.DoWork()
console.log(stu3)