class Student {
    constructor(name) {
        this.name = name;
        this.askedQuestionNum = 0;
    }
    askQuestion() {
        console.log("???")
        this.askedQuestionNum++
    }
}

class StudentWithWork extends Student{
    constructor(name) {
        super(name)
        this.workdone = 0;
    }
    dowork() {
        this.workdone++;
    }
}
const stu1 = new Student('hamsuga')
const stu2 = new StudentWithWork("hamsuga")
stu1.askQuestion()
stu2.dowork()
console.log(stu1)
console.log(stu2)