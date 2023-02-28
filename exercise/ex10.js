const a = { Parent: { Student: { Name: "Virat", Age: 24, Rollno: 34, marks: [ { English : 85 }, { Science: 75 } ] } , MobileNos: [ "1234567890", "9087654321" ] } };
const b = { ...a }; 

b.Parent = Object.assign({}, a.Parent);

b.Parent.Student = Object.assign({}, a.Parent.Student);

b.Parent.Student.marks = [...a.Parent.Student.marks];

b.Parent.MobileNos = [...a.Parent.MobileNos];
console.log(a);
