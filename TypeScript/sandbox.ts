let firstName: string = "Unni";
firstName = "Krishnan";
console.log(firstName);
let loc = 'Trivandrum';
console.log(loc);
let pincode = 686603;
console.log(pincode);

for(var i:number =0;i<10;i++){
    console.log(i);
}

let names: string[] = ["unni","krishnan","person"]
names.forEach((value,index,array)=>{
    console.log(value,index,array);
})

let newNames = names.map((value)=>{
    return value+"hi";
})
console.log(newNames);

let newerNames = names.filter((value)=>{
    return value.length>5;
})
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

const add = (a:number,b:number) : number =>{
    return a+b;
}

function subtract(a:number,b:number):number{
    return a-b;
}

console.log(add(5,5));

console.log(subtract(5,4));

let pet: {type:string,name:string,Breed:string} = { type: "Dog", name: "Bruno", Breed: "German Shepard"};

console.log(pet.name);

class Student{
    private studentId: string;
    private age: number;
    private firstName: string;

    constructor(studentId: string, age: number, firstName: string) {
        this.studentId = studentId;
        this.age = age;
        this.firstName = firstName;
    }

    printRecord(){
        console.log(this.age, this.firstName,this.studentId);
    }
}

let student = new Student("101",20,"manu");
console.log(student);
student.printRecord();

interface Card{
    cardNo: number;
    bank: string;
    cvv: number;
}


