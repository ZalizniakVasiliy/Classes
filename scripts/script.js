class Human {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }

  static showQuestionAboutFeeling() {
    console.log(`How are you feeling, friend?!`);
  }

  getAge() {
    let currentYear = new Date().getFullYear();
    let age = currentYear - this.yearOfBirth;
    console.log(`${this.firstName + ` ` + this.lastName} is ${age} years old.`);

    if (age > 120 || age <= 0) {
      Human.showQuestionAboutFeeling();
    }
  }
}

class Student extends Human {
  _attendanceRaiting = new Array(10);
  _attendanceIndex = 0;
  _assessmentRaiting = new Array(10);
  _assessmentIndex = 0;

  #getStudyQuestion() {
    console.log(`Are you ready to learn new things?!`);
  }

  getAge() {
    super.getAge();
    this.#getStudyQuestion();
  }

  present() {
    if (this._attendanceRaiting.length > this._attendanceIndex) {
      this._attendanceRaiting[this._attendanceIndex] = true;
      this._attendanceIndex++;
      console.log(this._attendanceRaiting);
      return this;
    }

    alert(`Attendance has reached its limit!`);
    throw new Error(`Attendance array is full!!!`);
  }

  absent() {
    if (this._attendanceRaiting.length > this._attendanceIndex) {
      this._attendanceRaiting[this._attendanceIndex] = false;
      this._attendanceIndex++;
      console.log(this._attendanceRaiting);
      return this;
    }

    alert(`Attendance has reached its limit!`);
    throw new Error(`Attendance array is full!!!`);
  }

  getAverageAttendance() {
    const averageAttendance =
      this._attendanceRaiting
        .slice(0, this._attendanceIndex)
        .filter((positiveValue) => positiveValue).length /
      this._attendanceIndex;
    // console.log(`Current average attendance is ${averageAttendance}`);
    return averageAttendance;
  }

  mark() {
    const assessment = +prompt(
      `Rate the skills of current student from 0 to 10, please:`,
      0
    );

    if (
      assessment < 0 ||
      assessment > 10 ||
      typeof assessment !== "number" ||
      isNaN(assessment)
    ) {
      alert(`Enter the number from a range!`);
      throw new Error(`The value you entered is not correct!!!`);
    }

    if (this._assessmentRaiting.length > this._assessmentIndex) {
      this._assessmentRaiting[this._assessmentIndex] = assessment;
      this._assessmentIndex++;
      console.log(this._assessmentRaiting);
      return this;
    }

    alert(`Possibility of getting new assessments has reached its limit!`);
    throw new Error(`The array of assessments is full!!!`);
  }

  getAverageMark() {
    const averageMark =
      this._assessmentRaiting
        .slice(0, this._assessmentIndex)
        .reduce((acc, singleMark) => {
          return acc + singleMark;
        }, 0) / this._assessmentIndex;
    // console.log(`Current average mark is ${averageMark}`);
    return averageMark;
  }

  summary() {
    if (this.getAverageMark() < 9 && this.getAverageAttendance() < 0.9) {
      console.log(`Редиска`);
    } else if (this.getAverageMark() < 9 || this.getAverageAttendance() < 0.9) {
      console.log(`Норм, но можно лучше`);
    } else {
      console.log(`Ути какой молодчинка!`);
    }
  }
}

const person = new Human(`Chris`, `Hemsworth`, 1901);

console.log(person);
// person.showQuestionAboutFeeling(); /* Uncaught TypeError: person.showQuestionAboutFeeling
//                                    is not a function */
Human.showQuestionAboutFeeling(); //How are you feeling, friend?!

person.getAge(); /* Chris Hemsworth is 121 years old.
                    How are you feeling, friend?! */

const person1 = new Human(`Charlie`, `Cox`, 1982);

console.log(person1);

person1.getAge(); /* Charlie Cox is 40 years old. */

const student = new Student(`Robert`, `Downey Jr.`, 1900);

console.log(student);

student.getAge(); /* Robert Downey Jr. is 122 years old.
                     How are you feeling, friend?!
                     Are you ready to learn new things?! */

// student.#getStudyQuestion(); /* Uncaught SyntaxError: Private field
//                                '#getStudyQuestion' must be declared in
//                                 an enclosing class */

student
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present()
  .present();
// .present()
// .present()

student.absent();
// .absent()
// .absent()
// .absent()
// .absent()
// .absent()
// .absent()
// .absent()
// .absent()
// .absent();

student
  .mark()
  .mark()
  .mark() /* .mark().mark().mark().mark().mark().mark().mark() */;

student.getAverageAttendance();

student.getAverageMark();

student.summary();
