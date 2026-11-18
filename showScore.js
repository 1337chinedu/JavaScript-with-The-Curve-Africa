function showScore(studentName, schoolName, subject, score) {
  let grade;
  let remark;

  if (score >= 70) {
    grade = "A";
    remark = "Excellent";
  } else if (score >= 60) {
    grade = "B";
    remark = "Very Good";
  } else if (score >= 50) {
    grade = "C";
    remark = "Good";
  } else if (score >= 45) {
    grade = "D";
    remark = "Fair";
  } else if (score >= 40) {
    grade = "E";
    remark = "Pass";
  } else {
    grade = "F";
    remark = "Fail";
  }

  console.log(
    `Welcome ${studentName} from ${schoolName}. ` +
      `Your score in ${subject} is ${score}, ` +
      `your grade is ${grade}, and your remark is ${remark}.`,
  );
}

showScore("Sarah", "Mushin High School", "Physics", 66);
