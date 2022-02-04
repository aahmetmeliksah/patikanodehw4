const fs = require("fs"); // imported fs

//------ created file
// fs.writeFile(
//   "employees.json",
//   `{"name": "Employee 1 Name", "salary": 2000}`,
//   "utf8",
//   (err) => console.log(err)
// );

//-------Read file
// fs.readFile("employees.json", "utf8", (err, data) => {
//   if (err) console.error(err);
//   console.log(data);
//   console.log("File has been read!");
// });

//---- updated file
// fs.appendFile(
//   "employees.json",
//   `\n {"name": "Ahmet Melikşah", "salary": 500000} `,
//   (err) => {
//     if (err) throw err;
//     console.log("employees.json UPDATED!");
//   }
// );

//---- unliked file
fs.unlink("employees.json", (err) => {
  if (err) console.log(err);
  console.log("Employees file unliked");
});
