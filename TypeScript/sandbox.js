var firstName = "Unni";
firstName = "Krishnan";
console.log(firstName);
var loc = 'Trivandrum';
console.log(loc);
var pincode = 686603;
console.log(pincode);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var names = ["unni", "krishnan", "person"];
names.forEach(function (value, index, array) {
    console.log(value, index, array);
});
var newNames = names.map(function (value) {
    return value + "hi";
});
console.log(newNames);
var newerNames = names.filter(function (value) {
    return value.length > 5;
});
console.log(newerNames);
// let h1: HTMLHeadingElement|null = document.querySelector("h1");
// console.log(h1);
// if(h1!=null){
//     console.log("hello");
//     h1.textContent = "Hello";
// }else{
//     console.log("world");
//     let h1 = document.createElement("h1")
//     h1.textContent = "World";
// }
var add = function (a, b) {
    return a + b;
};
function subtract(a, b) {
    return a - b;
}
console.log(add(5, 5));
console.log(subtract(5, 4));
var pet = { type: "Dog", name: "Bruno", Breed: "German Shepard" };
console.log(pet.name);
var Student = /** @class */ (function () {
    function Student(studentId, age, firstName) {
        this.studentId = studentId;
        this.age = age;
        this.firstName = firstName;
    }
    Student.prototype.printRecord = function () {
        console.log(this.age, this.firstName, this.studentId);
    };
    return Student;
}());
var student = new Student("101", 20, "manu");
console.log(student);
student.printRecord();
