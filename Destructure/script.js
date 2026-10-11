let student = {
  username: "Abhishek",
  age: 21,
  location: "Noida",
  gmail: "ak@gmail.com",
  password: "jhdui46w",
  subject: ["java", "python", "sql", "javaScript"],
};

// console.log(student.username);

let {gmail, subject} = student
console.log(gmail);
console.log(subject[1]);
